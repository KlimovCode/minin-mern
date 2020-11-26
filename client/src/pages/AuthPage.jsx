import React, { useState } from 'react'
import { useHttp } from '../hooks/http.hook';

export const AuthPage = () => {
  const { loading, request, error } = useHttp()

  const [value, setValue] = useState({
    email: '', password: ''
  })

  const valueHandler = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...value })
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
        <button disabled={loading}> Log in </button>
    &nbsp;
      <button disabled={loading} onClick={registerHandler}> Sign up </button>
      </div>
    </div>
  )
}
