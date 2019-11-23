import {createStackNavigator} from 'react-navigation-stack';


import MainNavigator from '../navigators/MainNavigator';
import HomeDrower from '../navigators/HomeDrower';




const PrimeiroStack = createStackNavigator({

    MainNavigator:{
        screen:MainNavigator,
        navigationOptions:{
            header:null
        }
    },
    HomeDrower:{
       screen:HomeDrower,
       
        navigationOptions:{
             header:null
        }
    }

    
})

export default PrimeiroStack;

