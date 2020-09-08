import React, { createContext, useState, useContext } from 'react';
import userApi from '../api/userApi';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {})
  const [token, setToken] = useState(localStorage.getItem("token") || null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)

  const signup = async (userdata) => {
    try {
      setLoading(true)
      const res = await userApi.post('signup', userdata)
      localStorage.setItem("token", res.data.data.token);
      setToken(res.data.data.token)
      localStorage.setItem("user", JSON.stringify(res.data.data));
      setUser(res.data.data)
      setIsLoggedIn(true)
      setLoading(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  const signin = async (userdata) => {
    try {
      setLoading(true)
      const res = await userApi.post('signin', userdata)
      localStorage.setItem("user", JSON.stringify(res.data.data));
      setUser(res.data.data)
      localStorage.setItem("token", res.data.data.token);
      setToken(res.data.data.token)
      setIsLoggedIn(true)
      setLoading(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser({})
    setToken(null)
    setIsLoggedIn(false)
  }


  return (
    <AuthContext.Provider
      value={{
        user, isLoggedIn, loading,
        signin, signup, logout, token
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)