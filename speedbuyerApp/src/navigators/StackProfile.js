import {createStackNavigator} from 'react-navigation-stack';

import Profile from '../screens/Profile';

const StackProfile = createStackNavigator({

    Profile:{
        screen:Profile,        
    }
    
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#f4f4f4'
        }
    }
})



export default StackProfile;