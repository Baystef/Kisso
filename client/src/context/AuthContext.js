import React, { createContext, useState } from 'react';
import userApi from '../api/userApi';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)

  const signup = async (userdata) => {
    try {
      setLoading(true)
      const res = await userApi.post('signup', userdata)
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.data));
      setUser(res.data)
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
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.data));
      setUser(res.data)
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
    setIsLoggedIn(false)
  }


  return (
    <AuthContext.Provider
      value={{
        user, isLoggedIn, loading,
        signin, signup, logout
      }}>
      {children}
    </AuthContext.Provider>
  )
}