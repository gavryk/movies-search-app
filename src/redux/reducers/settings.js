import { getLang } from "../actions/settings";

const initState = {
  appLang: getLang() || 'en-US',
};

const settings = (state = initState, action) => {
  switch (action.type) {
    case "SET_LANG":
      return {
        ...state,
        appLang: action.payload,
      };
    default:
      return state;
  }
};

export default settings;
