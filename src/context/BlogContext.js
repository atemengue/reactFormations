import createDataContect from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  // add dispactch to the bjects
  return (title, content) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
  };
};

export const { Context, Provider } = createDataContect(
  blogReducer,
  { addBlogPost },
  []
);
