import localStorage from "@/utils/localStorage";

const initialState = {
  sidebarShow: true,
  theme: "light",
};

localStorage.setInitialState(initialState);

export default localStorage.initStorage();
