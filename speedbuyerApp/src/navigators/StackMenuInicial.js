import {createStackNavigator} from 'react-navigation-stack';

import MenuInicial from '../screens/menuInicial';

const StackInicio = createStackNavigator({

    MenuInicial:{
        screen:MenuInicial,        
    }
    
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#f4f4f4'
        }
    }
})



export default StackInicio;



