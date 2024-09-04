import types from "../types";

const initialstate = {
  Blogs: null,
  SingleBlog: null,
  Related: null,
  blogid: null,
};

export const BlogReducer = (state = initialstate, action) => {
  switch (action.type) {
    case types.GET_BLOG:
      const blogs = action.payload;
      return {
        ...state,
        Blogs: blogs,
      };
    case types.GET_BLOG_BY_ID:
      const blogsById = action.payload;
      return {
        ...state,
        SingleBlog: blogsById,
      };
      case types.GET_RELATED_BLOGS:
        const related = action.payload;
        console.log("relatedBlogReducer" , related );
        return {
          ...state,
          Related: {
            ...state.Related,
            data: state.Related
              ? [...state.Related.data, ...related?.data]
              : [...related?.data],
            page: related?.page,
            total_pages: related?.total_pages,
            total_data: related?.total_data,
          },
        };
        case types.GET_BLOG_ID:
          const blogid = action.payload;
          console.log("hello blog id" , blogid)
          return {
            ...state,
            blogid: blogid,
          };

        // return state
    default:
      return state;
  }
};
