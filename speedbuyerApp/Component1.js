import React, {Component} from 'react'
import {AppRegistry, Text, View} from 'react-native'
import axios from 'axios'

export default class component1 extends Component{

  constructor()
  {
      super()

      this.state = {
          storeList:[]
      }
  }

  componentDidMount()
  {
    axios.get('http://10.0.2.2:5000/lojas/get_stores')
    .then(res=>this.setState({storeList:res.data.result}))
    .catch(err=>console.log("Errorrrrr:", err))
  }


  render()
  {
      let i = 0;
    return(
      <View>
        {this.state.storeList.map(store=>(
            <View key={i++}>
            <Text>{store.mer_nome}</Text>
            <Text>{store.en_cep}</Text>
            </View>
        ))}
      </View>
    )
  }
}

AppRegistry.registerComponent('component1', ()=>component1)