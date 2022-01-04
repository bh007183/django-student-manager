import * as actions from "../custom-actions"
import axios from "axios"
export const api = ({dispatch}) => next => async action => {
    if(action.type !== actions.start.type) return next(action)
    next(action)
    const {url, method, headers, data, onSuccess, onError} = action.payload
    try{
        const response =  await axios.request({
            url,
            method,
            headers,
            data,
            onSuccess,
            onError
        })
        dispatch(actions.success(response.data))
        if(onSuccess)dispatch({type: onSuccess, payload: response.data})

    }catch(error){
    
        dispatch(actions.error(error.response))
        if(onError)dispatch({type: onError, payload: error.response})

    }

}