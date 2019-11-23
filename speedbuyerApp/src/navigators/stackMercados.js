import {createStackNavigator} from 'react-navigation-stack';

import Mercados from '../screens/Mercados';

const StackMercados = createStackNavigator({

    Mercados:{
        screen:Mercados,        
    }
    
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#f4f4f4'
        }
    }
})



export default StackMercados;



