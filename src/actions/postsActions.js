// import axios from "axios";

const requestPosts = () => ({
  type: "REQUEST_POSTS",
});

const receivePosts = (data) => ({
  type: "RECEIVE_POSTS",
  data,
});

const failurePosts = (error) => {
  return {
    type: "FAILURE_POSTS",
    error,
  };
};
// We re gonna dispatch fetchPosts
// promise.then() <=> async await
// export const fetchPosts = () => {
//   return (dispatch) => {
//     dispatch(requestPosts());
//     return axios
//       .get("/api/posts")
//       .then((res) => dispatch(receivePosts(res.data)))
//       .catch((err) => console.log(err));
//   };
// };
