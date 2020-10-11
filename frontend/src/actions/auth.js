import axios from 'axios'
import {returnErrors} from './messages'


import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR
 
  } from './types';

  //CHEKC TOKEN AND LOAD

  export const loadUser = () => (dispatch,getState) => {
 //user loading 

  dispatch({type :USER_LOADING});

  //GET TOKEN FROM STATE

  const token = getState().auth.token;

  //HEADERS

  const config = {
      headers: {
          'Content-Type' : 'application/json'

      }
  }
if(token) {
    config.headers['Authorization'] = `Token ${token}` ;
}

//axios request

axios.get('/api/auth/user',config)
.then(res => {
    dispatch({
        type : USER_LOADED,
        payload : res.data
    });
})
.catch(err => {
    dispatch(returnErrors(err.response.data,
        err.response.status)) ;
        dispatch( {
            type :AUTH_ERROR
        });
});

  };