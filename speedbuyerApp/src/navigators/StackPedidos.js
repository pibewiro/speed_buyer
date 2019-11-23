import {createStackNavigator} from 'react-navigation-stack';

import Pedidos from '../screens/Pedidos';

const StackPedidos = createStackNavigator({

    Pedidos:{
        screen:Pedidos,        
    }
    
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#f4f4f4'
        }
    }
})



export default StackPedidos;