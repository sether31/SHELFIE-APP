import { createContext, useEffect, useReducer, useState } from 'react'
import userReducer from '../reducers/userReducer';
import Constants from 'expo-constants'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';


const { backendUrl } = Constants.expoConfig.extra;


const UserContext = createContext();

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    loginError: null,
    registerError: null,
    loading: false,
    authChecked: false 
  });

  useEffect(() => {
    const checkToken = async () => {
      try{
        const token = await AsyncStorage.getItem('token');
        if(token) {
          const payload = jwtDecode(token);
          const now = Math.floor(Date.now() / 1000);

          if(payload.exp && payload.exp > now) {
            dispatch({ type: 'LOGIN_SUCCESS', payload: payload.data });
          } else {
            // token expired
            await AsyncStorage.removeItem('token');
            dispatch({ type: 'LOGOUT' });
          }
        }
      } catch(error) {
        console.error('Error reading token', error);
      } finally {
        dispatch({ type: 'AUTH_CHECKED' });
      }
    };

    checkToken();
  }, []);

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
      console.log(data)
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
        // save to storage
        await AsyncStorage.setItem('token', data.token);

        const payload = jwtDecode(data.token);
        console.log(payload.data)
        dispatch({ type: 'LOGIN_SUCCESS', payload: payload.data})
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

  const logout = async () => {
    dispatch({ type: 'LOADING' });
    try{
      await AsyncStorage.multiRemove(['token']);
      // update state
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.error("Error logging out:", error);
      dispatch({ type: "LOGOUT" });
    }
  }

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
        register,
        login,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
