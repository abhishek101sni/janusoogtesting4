import store from "../store";
import types from "../types";

import { GET_PRODUCTS_BY_STATE, GET_PRODUCTS_CATEGORIES } from "../../services/urls";

import { apiGet } from "../../services/api";

const { dispatch } = store;

export async function getProductsCategories() {
  return apiGet(GET_PRODUCTS_CATEGORIES).then((res) => {
    console.log(res);
    dispatch({
      type: types.GET_PRODUCTS_CATEGORIES,
      payload: res,
    });
  });
}

export async function getProductsByState(stateData){
  console.log('STATE', stateData);
  return apiGet(`${GET_PRODUCTS_BY_STATE}/?state=${stateData}`);
}
