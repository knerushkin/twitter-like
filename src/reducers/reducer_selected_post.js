export default function(state = null, action) {
  switch (action.type) {
    case "FETCH_POST": {
      console.log("post reducer", action.type);
      console.log(action.payload.data);
      return action.payload.data;
    }
  }
  return state;
}
