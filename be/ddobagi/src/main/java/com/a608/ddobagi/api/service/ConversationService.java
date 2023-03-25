package com.a608.ddobagi.api.service;

import com.a608.ddobagi.api.dto.respoonse.ScriptResponse;
import com.a608.ddobagi.api.dto.respoonse.SituationDetailResponse;
import com.a608.ddobagi.config.S3Config;
import com.a608.ddobagi.db.entity.UserScript;
import com.a608.ddobagi.db.repository.*;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.google.gson.Gson;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.sound.sampled.*;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.*;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ConversationService {

    private final ConversationRepository conversationRepository;
    private final ConversationRepositoryImpl conversationRepositoryImpl;
    private final S3Config s3Config;
    private final UserScriptRepository userScriptRepository;
    private final UserRepository userRepository;
    private final ScriptRepository scriptRepository;

    public SituationDetailResponse findSituationDetails(Long situationId) {
        return conversationRepositoryImpl.selectSituationDetails(situationId);
    }

    public Long findRecordCount(Long situationId, Long userId) {
        return conversationRepositoryImpl.selectRecordCount(situationId, userId);
    }

    public List<ScriptResponse> findScriptList(Long situationId, Long userId) {
        return conversationRepositoryImpl.selectScriptList(situationId, userId);
    }

    public float getScore(Long scriptId, MultipartFile multipartFile) throws
        IOException {
        // 발음평가 api 돌려서 점수 받아냄

        String openApiURL = "http://aiopen.etri.re.kr:8000/WiseASR/PronunciationKor";   //한국어
        String accessKey = "22dc5f8d-966b-4e05-b00b-88d5bf2739e2";    // 발급받은 API Key
        String languageCode = "koran";     // 언어 코드

        String script = conversationRepository.findById(scriptId).orElseThrow(() -> new IllegalArgumentException("no such data")).getDefaultContent();    // 평가 대본

        String audioContents = null;

        Gson gson = new Gson();

        Map<String, Object> request = new HashMap<>();
        Map<String, String> argument = new HashMap<>();

        WavToRaw test = new WavToRaw();

        byte[] audioBytes = test.TransWavToRaw(multipartFile.getBytes());
        audioContents = Base64.getEncoder().encodeToString(audioBytes);

        argument.put("language_code", languageCode);
        argument.put("script", script);
        argument.put("audio", audioContents);

        request.put("argument", argument);

        URL url;
        Integer responseCode = null;
        String responBody = null;
        float score = 0.0f;

        try {
            url = new URL(openApiURL);
            HttpURLConnection con = (HttpURLConnection)url.openConnection();
            con.setRequestMethod("POST");
            con.setDoOutput(true);
            con.setRequestProperty("Content-Type", "application/json; charset=UTF-8");
            con.setRequestProperty("Authorization", accessKey);

            DataOutputStream wr = new DataOutputStream(con.getOutputStream());
            wr.write(gson.toJson(request).getBytes("UTF-8"));
            wr.flush();
            wr.close();

            responseCode = con.getResponseCode();
            InputStream is = con.getInputStream();
            byte[] buffer = new byte[is.available()];
            int byteRead = is.read(buffer);
            responBody = new String(buffer);

            JSONParser parser = new JSONParser();
            JSONObject jsonObject = (JSONObject) parser.parse(responBody);
            String return_object = jsonObject.get("return_object").toString();
            JSONObject jsonObject1 = (JSONObject) parser.parse(return_object);

            score = Float.parseFloat(jsonObject1.get("score").toString());

            System.out.println("[responseCode] " + responseCode);
            System.out.println("[responBody]");
            System.out.println(responBody);

        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }

        return score;
    }

    // s3에 저장 후 DB에 저장
    @Transactional
    public void saveRecord(Long situationId, Long userId, Long scriptId, MultipartFile multipartFile, float score) throws
        IOException {
        // https://ddobagi.s3.ap-northeast-2.amazonaws.com/situation{situationId}/user{userId}/script{scriptId}.wav
        // ex) https://ddobagi.s3.ap-northeast-2.amazonaws.com/situation1/user1/script1.wav

        String originalName = multipartFile.getOriginalFilename(); // 파일 이름
        long size = multipartFile.getSize(); // 파일 크기

        ObjectMetadata objectMetaData = new ObjectMetadata();
        objectMetaData.setContentType(multipartFile.getContentType());
        objectMetaData.setContentLength(size);

        AmazonS3Client amazonS3Client = s3Config.amazonS3Client();
        String bucketName = s3Config.getBucketName();

        StringBuilder sb = new StringBuilder();
        sb.append("situation");
        sb.append(situationId);
        sb.append("/user");
        sb.append(userId);
        sb.append("/script");
        sb.append(scriptId);
        sb.append(".wav");
        String uploadPath = sb.toString();

        // S3에 업로드
        amazonS3Client.putObject(
            new PutObjectRequest(bucketName, uploadPath, multipartFile.getInputStream(), objectMetaData)
                .withCannedAcl(CannedAccessControlList.PublicRead)
        );

        String s3Url = amazonS3Client.getUrl(bucketName, uploadPath).toString(); // 접근가능한 URL 가져오기

        // UserScript userScript = userScriptRepository

        UserScript userScript = userScriptRepository.findByUserIdAndScriptId(userId, scriptId);
        if(userScript != null){
            // 이미 있는 녹음
            userScriptRepository.save(new UserScript(
                userScript.getId(),
                s3Url,
                score,
                userRepository.findById(userId).orElseThrow(
                    () -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다. userId: " + userId)),
                scriptRepository.findById(scriptId).orElseThrow(
                    () -> new IllegalArgumentException("해당 스크립트가 존재하지 않습니다. scriptId: " + scriptId))));

        } else {
            // 새로운 녹음
            userScriptRepository.save(new UserScript(
                s3Url,
                score,
                userRepository.findById(userId).orElseThrow(
                    () -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다. userId: " + userId)),
                scriptRepository.findById(scriptId).orElseThrow(
                    () -> new IllegalArgumentException("해당 스크립트가 존재하지 않습니다. scriptId: " + scriptId))));
        }

    }


    public static class WavToRaw {

        private FileInputStream fstream = null;
        private byte[] audioBytes = new byte[1024];
        private byte[] buff = new byte[1024];
        private int read;

        public WavToRaw() {
            super();
            // TODO Auto-generated constructor stub
        }

        // 리니어 PCM 인코딩 및 지정된 파라미터를 가지는 AudioFormat를 구축합니다.
        // http://cris.joongbu.ac.kr/course/java/api/javax/sound/sampled/AudioFormat.html
        private static final AudioFormat FORMAT = new AudioFormat(
            16_000, // 16 kHz, sampleRate
            16, // 16 bits, sampleSizeInBits
            1, // Mono, int channels
            true, // Signed
            false // Little endian, True is BigEndian
        );

        //바이트 배열을 Raw 파일로 변환
        public byte[] TransWavToRaw(byte[] byteArray) {

            try {
                //핵심 코드
                return formatWavToRaw(changeFormat(byteArray, FORMAT));

            } catch (IOException | UnsupportedAudioFileException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            return null;
        }

        //Wav 파일에서 헤더 제거
        public byte[] formatWavToRaw(final byte[] audioFileContent) {
            return Arrays.copyOfRange(audioFileContent, 44, audioFileContent.length);
        }

        //기존의 Wav 파일(바이트 배열) 을 다른 형식의 Wav 형식 (바이트 배열) 로 변환
        public byte[] changeFormat(final byte[] audioFileContent, final AudioFormat audioFormat)
            throws IOException, UnsupportedAudioFileException {
            try (final AudioInputStream originalAudioStream = AudioSystem
                .getAudioInputStream(new ByteArrayInputStream(audioFileContent));
                 final AudioInputStream formattedAudioStream = AudioSystem.getAudioInputStream(audioFormat,
                     originalAudioStream);
                 final AudioInputStream lengthAddedAudioStream = new AudioInputStream(formattedAudioStream, audioFormat,
                     audioFileContent.length);
                 final ByteArrayOutputStream convertedOutputStream = new ByteArrayOutputStream()) {
                AudioSystem.write(lengthAddedAudioStream, AudioFileFormat.Type.WAVE, convertedOutputStream);
                return convertedOutputStream.toByteArray();
            }
        }

    }

}
