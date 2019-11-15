import {createStackNavigator} from 'react-navigation-stack';

import MeuCarrinho from '../screens/MeuCarrinho';

const StackMeuCarrinho = createStackNavigator({

    MeuCarrinho:{
        screen:MeuCarrinho,        
    }
    
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#f4f4f4'
        }
    }
})



export default StackMeuCarrinho;



