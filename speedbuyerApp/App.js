import React, {Component} from 'react'
import {AppRegistry, Text, View} from 'react-native'
import axios from 'axios'
import Login from "./src/Login.js/index.js"
import Register from "./src/register.js/index.js"
import Routers from "./src/Routers"

export default class myapp extends Component{

  render()
  {
    return(
      <View>
        <Routers />
      </View>
    )
  }
}

AppRegistry.registerComponent('myapp', ()=>myapp)