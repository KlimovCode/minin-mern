import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './routes'
import { useAuth } from './hooks/auth.hook'

import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  const { login, logout, token, userId } = useAuth()
  const router = useRoutes()
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Hello</h1>
        {router}
      </div>
    </BrowserRouter>
  );
}

export default App;
