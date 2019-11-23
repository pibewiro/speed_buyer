import {createStackNavigator} from 'react-navigation-stack';

import ListaCompras from '../screens/MinhaLista';

const StackListaCompras= createStackNavigator({

    ListaCompras:{
        screen:ListaCompras,        
    }
    
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#f4f4f4'
        }
    }
})



export default StackListaCompras;