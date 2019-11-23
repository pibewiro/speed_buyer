import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount()
  {
    try
    {
      let user = await AsyncStorage.getItem('jwtToken')
      console.log("user:", new Date(), user)
     
    }

    catch(err)
    {
      console.log(err)
    }
  }

 

  render() {

    return (
      <View>
        <Text> Details </Text>
      </View>
    );
  }
}
