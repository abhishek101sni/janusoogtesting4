import types from "../types";

const initialstate = {
  productscategories: null,
};

export const HomeReducer = (state = initialstate, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS_CATEGORIES:
      const category = action.payload;
      return {
        ...state,
        productscategories: category,
      };
    default:
      return state;
  }
};
