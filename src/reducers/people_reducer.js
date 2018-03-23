import ActionTypes from '../actions/people/action_types';

const initialState = {
    isRequesting:false,//Indica si se esta realizando un request
    error:[],//contiene errores de request resultantes
    people:[]//contiene lista resultante de people
};
export const peopleReducer = (state=initialState,action)=>{
        switch (action.type){
            case ActionTypes.request_all_people:
                return Object.assign({},state,{
                    isRequesting:true,
                    error:[],
                    people:[]
                });
            case ActionTypes.request_all_people_Success:
                return Object.assign({},state,{
                    isRequesting:false,
                    error:[],
                    people:action.payload
                });
            case ActionTypes.request_all_people_Error:
                return Object.assign({},state,{
                    isRequesting:false,
                    error:action.error,
                    people:[]
                });
            default:
                return state;
        }
};