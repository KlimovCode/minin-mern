import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './routes'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { Navbar } from './components/Navbar'

import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  const { login, logout, token, userId } = useAuth()
  const isAuth = !!token
  const router = useRoutes(isAuth)
  return (
    <AuthContext.Provider value={{
      login, logout, token, userId, isAuth
    }}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <h1>Hello</h1>
          {router}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
