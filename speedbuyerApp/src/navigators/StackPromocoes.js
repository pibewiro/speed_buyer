import {createStackNavigator} from 'react-navigation-stack';

import Promocoes from '../screens/Promocoes';

const StackPromocoes = createStackNavigator({

    Promocoes:{
        screen:Promocoes,        
    }
    
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#f4f4f4'
        }
    }
})



export default StackPromocoes;



