import React, {
    createContext,
    useEffect,
    useReducer
  } from 'react';
  import jwtDecode from 'jwt-decode';
  import axios from '../Helpers/axios';
  import {SESSION_KEY} from '../Helpers/Constants';
  import { LoginService } from '../Helpers/Http/LoginService';
  import { RegisterService } from '../Helpers/Http/RegisterService';
  import { handleResponse } from '../Helpers/responseHandler';
import LogIn from '../Pages/login page/LogIn';

  const initialAuthState = {
    isAuthenticated: false,
    isInitialised: false,
    user: null,
    error:null
  };
  
  const isValidToken = (tokenObj) => {
    console.log(tokenObj)
    if (!tokenObj) {
      return false;
    }
    const decoded = jwtDecode(tokenObj.access_token);
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  };
  
 
  const setSessionData = (data) => {
    if (data) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(data));
      axios.defaults.headers.common.Authorization = `Bearer ${data.token.access_token}`;
    } else {
      localStorage.removeItem(SESSION_KEY);
      delete axios.defaults.headers.common.Authorization;
    }
  };
  const reducer = (state, action) => {
  
    switch (action.type) {
      case 'INITIALISE': {
        const { isAuthenticated, user } = action.payload;
  
        return {
          ...state,
          isAuthenticated,
          isInitialised: true,
          user,
          error:null
        };
      }
      case 'REGISTER': {
        const { data } = action.payload;
        const user = data;
        console.log('in register reducer, user fetched is: ' )
        console.log(data,user)
        return {
          ...state,
          user,
          error:null
        };
      }
      case 'LOGIN': {
        const { data } = action.payload;
        const user = data;
        console.log('in login reducer, user fetched is: ' )
        console.log(data,user)
        return {
          ...state,
          isAuthenticated: true,
          user,
          error:null
        };
      }

      case 'LOGOUT': {
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error:null
        };
      }
    
      case 'ERROR': {
        const errorMSG = action.payload;

        console.log('error dispatched')
        console.log(errorMSG)
        return {
          ...state,
          isAuthenticated: false,
          error:errorMSG.error.message
        };
      }
      default: {
        return { ...state };
      }
    }
  };
  
  const AuthContext = createContext({
    ...initialAuthState,
    method: 'JWT',
    login: () => Promise.resolve(),
    register: () => Promise.resolve(),
    logout: () => { }
  });
  
  export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialAuthState);
    const register =  (username,email,password,phoneNumber,governorate,region,nearest) =>{
      (new RegisterService).register({
        username:username,
        password:password,
        email:email,
        phoneNumber:phoneNumber,
        governorate:governorate,
        region:region,
        nearest:nearest,

      })
      .then((res)=>{
        console.log('response is: ',res)
        if(res.status  == '200')
        {
          const data = res.data;
    //     // origin
        setSessionData(data)
        // setSession(data);
        console.log('after set session data,',data)
        dispatch({
          type: 'REGISTER',
          payload: {
            data
          }
        });
        }
        else{ // 404, 400,
          let resp = handleResponse(res)
          console.log('error of resp handler is : ')
          console.log(resp)
          dispatch({
            type: 'ERROR',
            payload: {
              error:resp
            }
          });
        }
        
      })
      .catch((err)=>{
        let resp = handleResponse(err)
        console.log('error caught: ',err)
        dispatch({
          type:'ERROR',
          payload:{
            error:resp
          }
        })
      })
    }


    const login =  (username, password) =>{
      (new LoginService).login({
        username:username,
        password:password
      })
      .then((res)=>{
        console.log('response is: ',res)
        if(res.status  == '200')
        {
          const data = res.data;
    //     // origin
        setSessionData(data)
        // setSession(data);
        console.log('after set session data,',data)
        dispatch({
          type: 'LOGIN',
          payload: {
            data
          }
        });
        }
        else{ // 404, 400,
          let resp = handleResponse(res)
          console.log('error of resp handler is : ')
          console.log(resp)
          dispatch({
            type: 'ERROR',
            payload: {
              error:resp
            }
          });
        }
        
      })
      .catch((err)=>{
        let resp = handleResponse(err)
        console.log('error caught: ',err)
        dispatch({
          type:'ERROR',
          payload:{
            error:resp
          }
        })
      })
    }


    const logout = () => {
      setSessionData(null);
      dispatch({ type: 'LOGOUT' });
    };
  
    
    useEffect(() => {
      const initialise = async () => {
        try {
          console.log('try to load userData from localstaorage')
          // const accessToken = window.localStorage.getItem('accessToken');
          let user = window.localStorage.getItem(SESSION_KEY);
          if(user)
          {
            user = JSON.parse(user);
          }
          console.log(user)
          if (user && user.token && isValidToken(user.token)) {
            setSessionData(user);
            dispatch({
              type: 'INITIALISE',
              payload: {
                isAuthenticated: true,
                user
              }
            });
          } else {
            console.log('user data not found or expired')
            dispatch({
              type: 'INITIALISE',
              payload: {
                isAuthenticated: false,
                user: null
              }
            });
          }
        } catch (err) {
          let resp = handleResponse(err)
          dispatch({
            type: 'INITIALISE',
            payload: {
              isAuthenticated: false,
              user: null
            }
          });
        }
      };
  
      initialise();
    }, []);
    if (!state.isInitialised) {
      return < LogIn/>;
    }
  
    return (
      <AuthContext.Provider
        value={{
          ...state,
          method: 'JWT',
          login,
          logout,
          register,
          
          
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthContext;