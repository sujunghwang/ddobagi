const USER_INFO = "UserInfo/USER_INFO" as const;

interface UserInfo {
  name: string;
  id: number;
}

export const inputUserInfo = (payload: UserInfo) => ({
  type: USER_INFO,
  payload: payload,
});

type InputUserInfoAction = ReturnType<typeof inputUserInfo>;

type InputUserInfoState = {
  payload: { name: string; id: number };
};

const initialState: InputUserInfoState = {
  payload: {
    name: "유저명",
    id: 1,
  },
};

function UserInfoSelector(
  state: InputUserInfoState = initialState,
  action: InputUserInfoAction
): InputUserInfoState {
  switch (action.type) {
    case USER_INFO:
      return {
        payload: {
          name: action.payload.name,
          id: action.payload.id,
        },
      };
    default:
      return state;
  }
}

export default UserInfoSelector;
