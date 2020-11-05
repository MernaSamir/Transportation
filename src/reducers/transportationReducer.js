import {
  FETCH_COMPANIES,
  NEW_COMPANY,
  GET_COMPANY,
  UPDATE_COMPANY,
} from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_COMPANIES:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_COMPANY:
      return {
        ...state,
        item: action.payload,
      };
    case GET_COMPANY:
      return {
        ...state,
        item: action.payload,
      };
    case UPDATE_COMPANY:
      return {
        ...state,
        item: action.payload,
      };

    default:
      return state;
  }
}
