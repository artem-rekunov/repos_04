import React from 'react'
import Navbar from "./navbar/Navbar"
import './app.css'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Registration from "./registration/Registration"

export default () => {
  return (
      <BrowserRouter>
          <div className='app'>
              <Navbar/>
              <div className="wrap">
                  <Switch>
                      <Route path="/registration" component={Registration}/>
                  </Switch>
              </div>
          </div>
      </BrowserRouter>
  )
}