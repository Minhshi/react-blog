// TODO: add and export your own actions
export function setPosts() {
  const url = "http://reduxblog.herokuapp.com/api/posts?key=123";
  const promise = fetch(url).then(response => response.json());;
  return {
    type: "SET_POSTS",
    payload: promise
  };
}
