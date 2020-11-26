import React, {useState} from 'react'

export const AuthPage = () => {
  const [value, setValue] = useState({
    email: '', password:  ''
  })

  const valueHandler = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value
    })
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
      <button> Log in </button>
    &nbsp;
      <button> Sign up </button>
    </div>
  </div>
  )
}
