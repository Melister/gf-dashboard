import { combineReducers } from 'redux';
import {peopleReducer} from "./people_reducer";



const rootReducer = combineReducers({
    people_r:peopleReducer
});

export default rootReducer;