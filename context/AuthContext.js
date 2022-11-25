import React, {createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
const axios = require('axios').default;

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState({})
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isLogout, setIsLogout] = useState(false)

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
        setIsLoading(true)
        axios.post('https://namchuminh.pythonanywhere.com/api/user/login/', {
            username: username,
            password: password
        })
        .then(function (response) {
            setToken(response.data)
            setIsLogout(false)
            AsyncStorage.setItem('@token', JSON.stringify(token))
            setIsLoading(false)
        })
        .catch(function (err) {
            setIsLoading(false)
            setError("Sai tài khoản hoặc mật khẩu!")
            alert('Sai tài khoản hoặc mật khẩu!')
        });
    }

    const register = (username, password, phone) => {
        axios.post('https://namchuminh.pythonanywhere.com/api/user/register/', {
            username: username,
            password: password,
            phone: phone
        })
        .then(function (response) {
          login(username, password)
        })
        .catch(function (err) {
          err.response.status == 406 ? setError("Tên người dùng đã tồn tại!") : setError("Đăng ký không thành công! Vui lòng kiểm tra lại!")
          alert(error)
        });
    }

    const logout = () => {
      setToken({})
      setIsLogout(true)
    }

    return (
      <AuthContext.Provider value={{
          token,
          error,
          isLogout,
          login,
          register,
          logout,
          isLoading
        }
      }>
        {children}
      </AuthContext.Provider>
    )
  }