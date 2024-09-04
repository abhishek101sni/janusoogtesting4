import store from "../store";
import types from "../types";

import { apiGet } from "../../services/api";

import { GET_BLOGS } from "../../services/urls";

const { dispatch } = store;

export async function getBlogs() {
  return apiGet(GET_BLOGS).then((res) => {
    console.log("blogsresponse", res);
    dispatch({
      type: types.GET_BLOG,
      payload: res,
    });
  });
}

export async function getBlogsById(id) {
  return apiGet(`${GET_BLOGS}/${id}`).then((res) => {
    console.log("SINGLE BLOG", res);
    dispatch({
      type: types.GET_BLOG_BY_ID,
      payload: res,
    });
  });
}

export async function getRelatedBlogs(id, page = 1, pageSize = 3) {
  console.log("article data", page, pageSize);
  const res = await fetch(
    // `${GET_BLOGS}/${id}?page=${page}&pageSize=${pageSize}`
    `${GET_BLOGS}?page=${page}&pageSize=${pageSize}`
  );
  const responseJson = await res.json();
  console.log("get related article", responseJson);
  dispatch({
    type: types.GET_RELATED_BLOGS,
    payload: responseJson,
  });
}


export async function getBlogsByTitle(param) {
  return apiGet(`${GET_BLOGS}/seotitle/${param}`).then((res) => {
    console.log("SINGLE BLOG", res);
    dispatch({
      type: types.GET_BLOG_BY_ID,
      payload: res,
    });
  });
}