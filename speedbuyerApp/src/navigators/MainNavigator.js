import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';


import HomeStack from '../navigators/HomeStack'
import Cadastrar from '../screens/Cadastro'


const MainNavigator = createBottomTabNavigator({
        
    Login:{
                screen:HomeStack
            },
            Profile:{
                screen:Cadastrar
            }
    });

    export default MainNavigator;