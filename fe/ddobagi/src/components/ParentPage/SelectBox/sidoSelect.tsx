import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SidoSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">시/도 선택</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="시/도 선택"
          onChange={handleChange}
          style={{
            backgroundColor:"white",
            color:"black",
            borderRadius:"20px",
            fontSize:"20px",
          }}
        >
          <MenuItem value={1}>서울</MenuItem>
          <MenuItem value={2}>부산</MenuItem>
          <MenuItem value={3}>대구</MenuItem>
          <MenuItem value={4}>인천</MenuItem>
          <MenuItem value={5}>광주</MenuItem>
          <MenuItem value={6}>대전</MenuItem>
          <MenuItem value={7}>울산</MenuItem>
          <MenuItem value={8}>경기</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}