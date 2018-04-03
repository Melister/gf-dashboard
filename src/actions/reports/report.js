import ActionTypes from './action_types';
import axios from 'axios';
import {API} from "../../constants/gfAPI";




export const GetPeopleByFilters = ()=>{
    return dispatch =>{
        dispatch(request_report_info());
        axios.get(API.GetPeopleByFilters)
            .then((response)=>{
                dispatch(request_report_info_Success(response));
            })
            .catch((error)=>{
                dispatch(request_report_info_Error(error));
            });
    }
}

const request_report_info = () =>{
    return{
        type:ActionTypes.request_report_info
    }
}
const request_report_info_Success =(response)=>{
    return{
        type:ActionTypes.request_report_info_Success,
        payload:response
    }
}
const request_report_info_Error = (error)=>{
    return{
        type:ActionTypes.request_report_info_Error,
        error
    }
}
