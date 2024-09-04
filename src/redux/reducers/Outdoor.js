import types from "../types";

const intialstate = {
  products: null,
  state: null,
  city: null,
  allstates: null,
  selectedState: "",
  selectedCity: "",
  AllStateCities: null,
  typedata: null,
};

export const OutdoorReducer = (state = intialstate, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      const data = action.payload;
      return {
        ...state,
        products: data,
      };
    case types.GET_PRODUCTS_BY_STATE:
      const data2 = action.payload;
      return {
        ...state,
        products: data2,
      };
    case types.GET_STATE_CITY:
      const data3 = action.payload;
      return {
        ...state,
        allstates: data3,
      };
    case types.SELECT_STATE:
      const selectedState = action.payload;
      return {
        ...state,
        selectedState: selectedState,
      };
    case types.SELECT_CITY:
      const selectedCity = action.payload;
      return {
        ...state,
        selectedCity: selectedCity,
      };
    case types.UPDATE_CITIES:
      const cities = action.payload;
      return {
        ...state,
        AllStateCities: cities,
      };
    case types.GET_TYPE:
      const typedata = action.payload;
      return {
        ...state,
        typedata: typedata,
      };
    default:
      return state;
  }
};
