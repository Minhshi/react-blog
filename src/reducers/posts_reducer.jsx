export default function(state = [], action) {
  switch (action.type) {
    case "SET_POSTS":
      return action.payload;
    case "SET_POST":
      return [action.payload];
    default:
      return state;
  }
}
