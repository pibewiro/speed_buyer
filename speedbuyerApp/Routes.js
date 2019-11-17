import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Component1 from './Component1'
import Login from './Login'

const Routes = () => (
    <Router>
       <Scene key = "root">
            <Scene key = "login" component = {Login} title = "Login" initial = {true} />
          <Scene key = "component1" component = {Component1} title = "Component1" />
       </Scene>
    </Router>
 )
 export default Routes