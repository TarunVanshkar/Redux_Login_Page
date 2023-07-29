import { FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAILURE } from "./profileActionTypes";

export const fetchProfileRequest = () => {
    return {
        type: FETCH_PROFILE_REQUEST
    }
}

export const fetchProfileSuccess = (data) => {
    return {
        type: FETCH_PROFILE_SUCCESS,
        payload: data
    }
}

export const fetchProfileError = (error) => {
    return {
        type: FETCH_PROFILE_FAILURE,
        payload: error
    }
}

export const fetchProfileResult = (id) => {
    return (dispatch) => {
        dispatch(fetchProfileRequest());
        console.log('handle profile')

        fetch(`https://dummyjson.com/users/${id}`)
            .then(response => response.json())    // Always ise response.json(), not response.JSON()
            .then((data) => {
                console.log(data);
                dispatch(fetchProfileSuccess(data));
            })
            .catch((error) => {
                console.log(error);
                dispatch(fetchProfileError(error));
            })
    }
}