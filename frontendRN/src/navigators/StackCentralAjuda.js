import {createStackNavigator} from 'react-navigation-stack';

import CentralAjuda from '../screens/CentralAjuda';

const StackCentralAjuda = createStackNavigator({

    CentralAjuda:{
        screen:CentralAjuda,        
    }
    
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#f4f4f4'
        }
    }
})



export default StackCentralAjuda;



