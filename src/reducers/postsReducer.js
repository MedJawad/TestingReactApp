const initial_state = {
  items: [
    {
      id: 1,
      title: "Hello World Post 1",
      description: "Hello World Post Description 1",
    },
    {
      id: 2,
      title: "Hello World Post 2",
      description: "Hello World Post Description 2",
    },
    {
      id: 3,
      title: "Hello World Post 3",
      description: "Hello World Post Description 3",
    },
    {
      id: 4,
      title: "Hello World Post 4",
      description: "Hello World Post Description 4",
    },
  ],
  isLoading: false,
  error: null,
};

export const posts = (state = initial_state, action) => {
  switch (action.type) {
    case "REQUEST_POSTS":
      return {
        items: [],
        isLoading: true,
        error: null,
      };
    case "RECEIVE_POSTS":
      return {
        items: action.data,
        isLoading: false,
        error: null,
      };
    case "FAILURE_POSTS":
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
