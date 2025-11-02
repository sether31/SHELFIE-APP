import { createContext, useReducer, useState } from 'react'
import userReducer from '../reducers/userReducer';
import Constants from 'expo-constants'


const { backendUrl } = Constants.expoConfig.extra;


const UserContext = createContext();

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    loginError: null,
    registerError: null,
    loading: false
  });

  const login = async (email, password) => {
    dispatch({type: 'LOADING'});
    try {
      const res = await fetch(`${backendUrl}auth.php`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({action: 'login', email, password})
      });

      if(!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data)
      if(data.status === 'success') {
        dispatch({ type: 'LOGIN_SUCCESS', payload: {email}})
        return data;
      } else {
        dispatch({ type: 'LOGIN_ERROR', payload: data.message})
        return data;
      }
    } catch(error) {
      dispatch({type: 'LOGIN_ERROR', payload: error.message})
      return { success: false, message: error.message };
    }
  }

  const register = async (email, password) => {
    dispatch({type: 'LOADING'});

    try {
      const res = await fetch(`${backendUrl}auth.php`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({action: 'register', email, password})
      });
      if(!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      if(data.status === "success") {
        dispatch({type: 'REGISTER_SUCCESS', payload: {email}})
        return data;
      } else {
        dispatch({type: 'REGISTER_ERROR', payload: data.message})
        return data;
      }
    } catch (error) {
      dispatch({type: 'REGISTER_ERROR', payload: error.message})
      return { success: false, message: error.message };
    }
  }

  const logout = async () => {
    
  }

  return (
    <UserContext.Provider
      value={{
        state,
        login,
        logout,
        register
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
