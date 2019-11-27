import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';



import Profile from '../screens/Profile';
import HomeStack from '../navigators/HomeStack'

const MainNavigator = createBottomTabNavigator({
        
    Login:{
                screen:HomeStack
            },
            Cadastro:{
                screen:Profile
            }
    });

    export default MainNavigator;