import store from "../store";
import types from "../types";
import { apiGet, apiPost } from "../../services/api";

import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_STATE,
  POST_CUSTOMER_ENQUIRY,
  GET_STATE_CITY,
  GET_TYPE,
} from "../../services/urls";


const { dispatch } = store;

export async function getProducts() {
  return apiGet(GET_PRODUCTS).then((res) => {
    console.log(res);
    dispatch({
      type: types.GET_PRODUCTS,
      payload: res,
    });
  });
}

export async function getProductsByState(state, city, subcat = "") {
  console.log("helooooooooooooo" ,state, city, subcat);
  state = city??state
  const url =
    subcat === ""
      ? `${GET_PRODUCTS_BY_STATE}?state=${state}`
      : `${GET_PRODUCTS_BY_STATE}?state=${state}&subcat=${subcat}`;
      console.log("my urllllllllllll" ,url)
  return apiGet(url).then((res) => {
    console.log("PRODUCTS BY STATE", res);
    dispatch({
      type: types.GET_PRODUCTS_BY_STATE,
      payload: res,
    });
  });
}

export async function getProductsById(id) {
  return apiGet(`${GET_PRODUCTS}/${id}`);
}

export async function submitenquiry(data) {
  return apiPost(POST_CUSTOMER_ENQUIRY, data).then((res) => {
    console.log(res);
  });
}

// Getting States and City

export async function getStateAndCity(data3) {
  return apiGet(GET_STATE_CITY, data3).then((res) => {
    console.log(res);
    dispatch({
      type: types.GET_STATE_CITY,
      payload: res,
    });
  });
}

export async function getType() {
  return apiGet(GET_TYPE).then((res) => {
    console.log("Get_type_response", res);
    dispatch({
      type: types.GET_TYPE,
      payload: res,
    });
  });
}
