import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';


import HomeStack from '../navigators/HomeStack'
import Cadastrar from '../screens/Cadastro'
import Profile from '../screens/Profile'
import PessoaF from '../screens/PessoaF'
import PessoaJ from '../screens/PessoaJ'
import Entregador from '../screens/Entregador'
import PerfilJ from '../screens/PerfilJ'
import PerfilE from '../screens/PerfilE'
import PerfilF from '../screens/PerfilF'
import PessoaJE from '../screens/PessoaJE'
import PessoaFE from '../screens/PessoaFE'
import PessoaEE from '../screens/PessoaEE'

import { createStackNavigator } from 'react-navigation';



const MainNavigator = createBottomTabNavigator({
        
    Login:{
                screen:HomeStack
            },

    Cadastrar:{
                screen:Cadastrar
            },

    Profile:{
        screen:Profile
    },

    PessoaF:{
        screen:PessoaF
    },

    PessoaJ:{
        screen:PessoaJ
    },

    PerfilJ:{
        screen:PerfilJ
    },

    PerfilF:{
        screen:PerfilF
    },

    PerfilE:{
        screen:PerfilE
    },

    Entregador:{
        screen:Entregador
    },

    PessoaJE:{
        screen:PessoaJE
    },

    PessoaFE:{
        screen:PessoaFE
    },

    PessoaEE:{
        screen:PessoaEE
    }

 
    });

    export default MainNavigator;