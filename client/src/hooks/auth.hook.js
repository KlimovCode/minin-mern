import { useState, useCallback, useEffect } from 'react'

const userData = 'user-data'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const [ready, setReady] = useState(false)

  const login = useCallback((jwt, id) => {
    setToken(jwt)
    setUserId(id)
    window.localStorage.setItem(userData, JSON.stringify({
      token: jwt, userId: id
    }))
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    window.localStorage.removeItem(userData)
  }, [])

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem(userData))
    if (data && data.token) login(data.token, data.userId)
    setReady(true)
  }, [login]);

  return { login, logout, token, userId, ready }
}