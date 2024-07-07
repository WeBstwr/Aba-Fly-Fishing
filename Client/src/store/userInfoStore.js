import { create } from "zustand";

const userInfoStore = create((set) => ({
  userInfo: {},

  recordUserInfomation: (userInfo) => {
    set(() => {
      return { userInformation: userInfo };
    });
  },
}));

export default userInfoStore;
