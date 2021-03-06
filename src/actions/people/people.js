import ActionTypes from './action_types';
import axios from 'axios';
import {API} from "../../constants/gfAPI";


export const GetAllPeople = ()=>{
    return dispatch =>{
        dispatch(request_all_people());
        axios.get(API.GetAllPeopleInformation)
            .then((response)=>{
                dispatch(request_all_people_Success(response));
            })
            .catch((error)=>{
                dispatch(request_all_people_Error(error));
            });
    }
}

const request_all_people = () =>{
    return{
        type:ActionTypes.request_all_people
    }
}
const request_all_people_Success =(response)=>{
    return{
        type:ActionTypes.request_all_people_Success,
        payload:response
    }
}
const request_all_people_Error = (error)=>{
    return{
        type:ActionTypes.request_all_people_Error,
        error
    }
}
