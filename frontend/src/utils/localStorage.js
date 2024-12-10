import { legacy_createStore as createStorage } from "redux";
import PropTypes from "prop-types";

let initialState = {};

const setInitialState = (state) => {
  initialState = state;
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };

    default:
      return state;
  }
};

const initStorage = () => {
  return createStorage(changeState);
};

setInitialState.PropTypes = {
  requiredAny: PropTypes.any.isRequired,
};

const localStorage = {
  setInitialState,
  initStorage,
};

export default localStorage;
