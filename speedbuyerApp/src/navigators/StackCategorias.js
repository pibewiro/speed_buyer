import {createStackNavigator} from 'react-navigation-stack';

import Categorias from '../screens/Categorias';

const StackCategorias = createStackNavigator({

    Categorias:{
        screen:Categorias,        
    }
    
},{
    defaultNavigationOptions:{
        headerStyle:null
    }
})



export default StackCategorias;