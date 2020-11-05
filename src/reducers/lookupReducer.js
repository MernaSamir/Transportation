import { GET_COUNTRIES, GET_CITIES, GET_VEHICLETYPES } from "../actions/types";

const initialState = {
  countries: [],
  cities: [],
  vehicleTypes: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload,
      };
    case GET_VEHICLETYPES:
      return {
        ...state,
        vehicleTypes: action.payload,
      };
    default:
      return state;
  }
}
