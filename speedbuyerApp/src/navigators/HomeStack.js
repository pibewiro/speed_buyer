import {createStackNavigator} from 'react-navigation-stack';

import Login from '../screens/Login';
import HomeDrower from '../navigators/HomeDrower';

const MainStack = createStackNavigator({

    Login:{
        screen:Login,       
        navigationOptions:{
             header:null
        }
    },
    Perfil:{
        screen:HomeDrower
    }
})

export default MainStack;

