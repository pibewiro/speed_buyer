import React, {Component} from 'react'
import {AppRegistry, Text, View} from 'react-native'
import axios from 'axios'
import Login from "./Login.js"
import Register from "./register.js"

//import {createStackNavigator} from "react-navigation"

export default class myapp extends Component{

  render()
  {
    return(
      <View>
        <Register />
      </View>
    )
  }
}

/*const AppStackNavigator = createStackNavigator({
  Component1:Component1,
  Home:Login
}) */

AppRegistry.registerComponent('myapp', ()=>myapp)