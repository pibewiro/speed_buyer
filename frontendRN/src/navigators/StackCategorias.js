import {createStackNavigator} from 'react-navigation-stack';

import Categorias from '../screens/Categorias';

const StackCategorias = createStackNavigator({

    Categorias:{
        screen:Categorias,        
    }
    
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#f4f4f4'
        }
    }
})



export default StackCategorias;