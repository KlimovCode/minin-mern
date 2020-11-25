import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import {LinksPage} from './pages/LinksPage'
import {AuthPage} from './pages/AuthPage'

export const useRoutes = isAuth => {
  if(isAuth) {
  return (
    <Switch>
      <Route path="/Links" exact>      
        <LinksPage />
      </Route>
      <Redirect to="/Links" />
    </Switch>
  )
  } 
  return (
    <Switch>
      <Route path="/Auth" exact>      
        <AuthPage />
      </Route>
      <Redirect to="/Auth" />
    </Switch>
  )
}
