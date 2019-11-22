import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';



import Cadastro from '../screens/Cadastro';
import HomeStack from '../navigators/HomeStack'

const MainNavigator = createBottomTabNavigator({
        
    Login:{
                screen:HomeStack
            },
            Cadastro:{
                screen:Cadastro
            }
    });

    export default MainNavigator;