import store from "../store";
import types from "../types";

import { apiGet } from "../../services/api";
import { GET_INDIVIDUAL_PRODUCT } from "../../services/urls";

const { dispatch } = store;

export function getProductDetails(param) {
    return apiGet(`${GET_INDIVIDUAL_PRODUCT}/${param}`);
}
