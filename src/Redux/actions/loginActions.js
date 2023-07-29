import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE } from "./actionTypes";

export const fetchLoginRequest = () => {
    return {
        type: FETCH_LOGIN_REQUEST
    }
}

export const fetchLoginSuccess = (data) => {
    return {
        type: FETCH_LOGIN_SUCCESS,
        payload: data
    }
}

export const fetchLoginFailure = (error) => {
    return {
        type: FETCH_LOGIN_FAILURE,
        payload: error
    }
}


export const fetchLoginResult = (name, password) => {
    return (dispatch) => {
        dispatch(fetchLoginRequest());
        console.log('handle fetch')

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: name,
                password: password
            })
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                dispatch(fetchLoginSuccess(data));
            })
            .catch((error) => {
                console.log(error);
                dispatch(fetchLoginFailure(error));
            })
    }
}

