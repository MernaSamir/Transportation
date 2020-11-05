import { GET_COUNTRIES, GET_CITIES, GET_VEHICLETYPES } from "./types";
import axios from "axios";
export const GetCountries = () => (dispatch) => {
  axios
    .get("http://23.254.228.118:8080/API/api/Lookup/GetCountries")
    .then((res) =>
      dispatch({
        type: GET_COUNTRIES,
        payload: res.data.Data,
      })
    );
};
export const getCities = (ID) => (dispatch) => {
  axios
    .get("http://23.254.228.118:8080/API/api/Lookup/GetCities", {
      params: { CountryID: ID },
    })
    .then((c) => {
      dispatch({
        type: GET_CITIES,
        payload: c.data.Data,
      });
    });
};
export const getVehicleTypes = () => (dispatch) => {
  axios
    .get("http://23.254.228.118:8080/API/api/Lookup/GetVehicleType")
    .then((res) =>
      dispatch({
        type: GET_VEHICLETYPES,
        payload: res.data.Data,
      })
    );
};
