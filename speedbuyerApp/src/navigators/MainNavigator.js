import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';


<<<<<<< HEAD
=======

import Cadastro from '../screens/Cadastro';
>>>>>>> 8875305468676e925524cf5130bd6e0be53e132f
import HomeStack from '../navigators/HomeStack'
import Cadastrar from '../screens/Cadastro'


const MainNavigator = createBottomTabNavigator({
        
    Login:{
                screen:HomeStack
            },
<<<<<<< HEAD
            Profile:{
                screen:Cadastrar
=======
            Cadastro:{
                screen:Cadastro
>>>>>>> 8875305468676e925524cf5130bd6e0be53e132f
            }
    });

    export default MainNavigator;