import createDataContect from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog post #${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  // add dispactch to the bjects
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

export const { Context, Provider } = createDataContect(
  blogReducer,
  { addBlogPost },
  []
);
