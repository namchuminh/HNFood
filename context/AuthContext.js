import React, {createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
const axios = require('axios').default;

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState({})
    const [error, setError] = useState("")

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@token', jsonValue)
        } catch (e) {
            // saving error
        }
    }

    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@token')
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
          // error reading value
        }
    }

    const login = (username, password) => {
        axios.post('http://10.0.2.2:8000/api/user/login/', {
            username: username,
            password: password
        })
        .then(function (response) {
            setToken(response.data)
            AsyncStorage.setItem('@token', JSON.stringify(token))
        })
        .catch(function (err) {
            setError("Sai tài khoản hoặc mật khẩu!")
            alert(error)
        });
    }

    return (
      <AuthContext.Provider value={{
          token,
          error,
          login
        }
      }>
        {children}
      </AuthContext.Provider>
    )
  }
