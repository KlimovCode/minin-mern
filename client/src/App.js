import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './routes'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { Navbar } from './components/Navbar'
import { Loader } from './components/Loader'

import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css'
import './style.css'

function App() {
  const { login, logout, token, userId, ready } = useAuth()
  const isAuth = !!token
  console.log(isAuth);

  const router = useRoutes(isAuth)

  if (!ready) return <Loader />

  return (
    <AuthContext.Provider value={{
      login, logout, token, userId, isAuth
    }}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {router}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
