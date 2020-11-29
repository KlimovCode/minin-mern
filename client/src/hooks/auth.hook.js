import { useState, useCallback, useEffect } from 'react'

const userData = 'user-data'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)

  const login = useCallback((jwt, id) => {
    setToken(jwt)
    setUserId(id)
    window.localStorage.setItem(userData, JSON.stringify({
      token, userId
    }))
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    window.localStorage.removeItem(userData)
  }, [])

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem(userId))
    if (data && data.token) login(data.token, data.userId)
  }, [login]);

  return { login, logout, token, userId }
}