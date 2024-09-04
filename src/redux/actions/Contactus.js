import store from "../store";
import types from "../types";

import {POST_CUSTOMER_CONTACT} from "../../services/urls";
import { apiPost } from "../../services/api";

export async function submitContactDetails(data) {
    console.log('OUTSIDE ACTION', data);
    return apiPost(POST_CUSTOMER_CONTACT, data).then((res) => {
      console.log(res);
      console.log('INSIDE ACTION', data);
    });
  }