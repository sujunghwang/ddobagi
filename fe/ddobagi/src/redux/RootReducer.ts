import { combineReducers } from "redux"
import languageChange from "./LanguageSelector"
import inputUserInfo from "./UserInfo";
import { PersistConfig, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  whitelist: ["languageChange", "inputUserInfo"]
};
export const rootReducer = combineReducers({
  languageChange, inputUserInfo
});

export default persistReducer(persistConfig, rootReducer);

// 루트 리듀서를 내보내주세요.

// 루트 리듀서의 반환값를 유추해줍니다
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내줍니다.
export type RootState = ReturnType<typeof rootReducer>