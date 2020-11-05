import {
  FETCH_COMPANIES,
  NEW_COMPANY,
  GET_COMPANY,
  UPDATE_COMPANY,
} from "./types";
import axios from "axios";
export const fetchCompanies = () => (dispatch) => {
  axios
    .get("http://23.254.228.118:8080/API/api/TransportationCompany/All")
    .then((items) =>
      dispatch({
        type: FETCH_COMPANIES,
        payload: items.data.Data,
      })
    );
};
export const getCompany = (company_id) => (dispatch) => {
  axios
    .get("http://23.254.228.118:8080/API/api/TransportationCompany/GetById", {
      params: { ID: company_id },
    })
    .then((com) =>
      dispatch({
        type: GET_COMPANY,
        payload: com.data.Data,
      })
    );
};
export const createCompany = (companyData) => (dispatch) => {
  axios
    .post("http://23.254.228.118:8080/API/api/TransportationCompany/Add", {
      companyData,
    })
    .then((item) => {
      dispatch({
        type: NEW_COMPANY,
        payload: item,
      });
    });
};
export const updateCompany = (id, companyData) => (dispatch) => {
  axios
    .put(
      `http://23.254.228.118:8080/API/api/TransportationCompany/Update/${id}`,
      {
        companyData,
      }
    )
    .then((item) => {
      dispatch({
        type: UPDATE_COMPANY,
        payload: item,
      });
    });
};
