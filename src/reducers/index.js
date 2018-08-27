import {combineReducers} from "redux";
import PostsReducer from "./reducer_posts";
import SelectedPostReducer from "./reducer_selected_post";

const rootReducer = combineReducers({
    posts: PostsReducer,
    selected: SelectedPostReducer
})

export default rootReducer;