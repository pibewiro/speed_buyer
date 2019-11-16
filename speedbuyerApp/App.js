import React, {Component} from 'react'
import {AppRegistry, Text, View} from 'react-native'
import axios from 'axios'
import Component1 from "./Component1"

export default class myapp extends Component{


  render()
  {
    return(
      <View>
        <Text>Hello</Text>
        <Component1 />
      </View>
    )
  }
}

AppRegistry.registerComponent('myapp', ()=>myapp)