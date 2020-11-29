import React, { useState, useEffect, useContext } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const { loading, request, error, clearError } = useHttp()

  const [value, setValue] = useState({
    email: '', password: ''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError]);

  const valueHandler = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...value })
      message(data.msg)
    } catch (e) {

    }
  }
  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...value })
      console.log(data)
      auth.login(data.token, data.userId)
    } catch (e) {

    }
  }

  return (
    <div>
      <h1>Auth</h1>
      <div>
        <label htmlFor="email"> Email </label> <br />
        <input id="email" name="email"
          onChange={valueHandler}
        />
      </div>
      <div>
        <label htmlFor="password"> Password </label> <br />
        <input id="password" name="password"
          onChange={valueHandler}
        />
      </div>
      <br /> <br />
      <div>
        <button disabled={loading} onClick={loginHandler}> Log in </button>
    &nbsp;
      <button disabled={loading} onClick={registerHandler}> Sign up </button>
      </div>
    </div>
  )
}
