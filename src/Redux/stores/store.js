import {createStore, combineReducers, applyMiddleware} from 'redux';
import loginReducer from '../reducers/loginReducer';
import thunk from 'redux-thunk';
import profileReducer from '../reducers/profileReducer';

const rootReducer = combineReducers({
    login : loginReducer,
    profile : profileReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;