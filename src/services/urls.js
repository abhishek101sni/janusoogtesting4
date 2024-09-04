const baseUrl = 'https://janus-alive.onrender.com';

const getApiUrl = (endpoint) => baseUrl + endpoint;

export const GET_PRODUCTS = getApiUrl('/api/products');
export const GET_PRODUCTS_BY_STATE = getApiUrl('/api/products');
// export const POST_CUSTOMER_ENQUIRY = getApiUrl('/api/conatactform');
export const POST_CUSTOMER_ENQUIRY = getApiUrl('/api/query');
export const GET_PRODUCTS_CATEGORIES = getApiUrl('/api/category')
export const POST_CUSTOMER_CONTACT = getApiUrl('/api/conatactform')

export const GET_STATE_CITY = getApiUrl('/api/statescity')



export const GET_BLOGS = getApiUrl('/api/blog')
export const GET_TYPE = getApiUrl('/api/type')

export const GET_INDIVIDUAL_PRODUCT = "https://www.januskoncepts.in/janusoohadmin/api/api_product/fetchproduct.php"






