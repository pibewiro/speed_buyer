import {createStackNavigator} from 'react-navigation-stack';

import Perfil from '../screens/Perfil';

const StackPerfil = createStackNavigator({

    Perfil:{
        screen:Perfil,        
    }
    
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#f4f4f4'
        }
    }
})



export default StackPerfil;