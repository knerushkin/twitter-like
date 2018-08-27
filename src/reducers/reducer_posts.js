export default function(state = [], action) {
    console.log("Action reveived: ", action);
    if(!action.error) {
        switch(action.type) {
            case "FETCH_POSTS":
                return action.payload.data;
        }
    } else {
        return "Error has occured";
    }
    return state;
}