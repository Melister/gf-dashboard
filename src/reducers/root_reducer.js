import { combineReducers } from 'redux';
import {peopleReducer} from "./people_reducer";
import {reportReducer} from "./report_reducer";



const rootReducer = combineReducers({
    people_r:peopleReducer,
    report_r:reportReducer
});

export default rootReducer;