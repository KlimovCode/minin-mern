import React from 'react'

export const AuthPage = () => {
  return (
  <div>
    <h1>Auth</h1>
    <div>
      <label htmlFor="email"> Email </label> <br />
      <input id="email" />
    </div>
    <div>
      <label htmlFor="password"> Password </label> <br />
      <input id="password" />
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
