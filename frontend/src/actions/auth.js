import axios from 'axios'
import {returnErrors} from './messages'


import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS
 
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

  //////second part

  //LOGIN USER

  export const login = (username,password) => dispatch => {
   
     //HEADERS
   
     const config = {
         headers: {
             'Content-Type' : 'application/json'
   
         }
     } ;

     //request body 

     const body = JSON.stringify({username,password}) ;


 
   //axios request
   axios.post('/api/auth/login',body, config)
   .then(res => {
       dispatch({
           type : LOGIN_SUCCESS,
           payload : res.data
       });
   })
   .catch(err => {
       dispatch(returnErrors(err.response.data,
           err.response.status)) ;
           dispatch( {
               type :LOGIN_FAIL
           });
   });
   
     };

//LogOut user




export const logout = () => (dispatch,getState) => {
    //user loading 
   
   
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
   
   axios.post('/api/auth/logout/',null,config)
   .then(res => {
       dispatch({
           type : LOGOUT_SUCCESS,
       });
   })
   .catch(err => {
       dispatch(returnErrors(err.response.data,
           err.response.status)) ;
      
   });
   
     };