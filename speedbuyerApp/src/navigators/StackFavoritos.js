import {createStackNavigator} from 'react-navigation-stack';

import Favoritos from '../screens/Favoritos';

const StackFavoritos = createStackNavigator({

    Favoritos:{
        screen:Favoritos,        
    }
    
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#f4f4f4'
        }
    }
})



export default StackFavoritos;



