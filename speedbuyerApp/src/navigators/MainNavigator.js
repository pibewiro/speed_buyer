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
import Mercados2 from '../screens/Mercados2'
import Categorias2 from '../screens/Categorias2'
import Itens from '../screens/Itens'
import EscolhaEntregador from '../screens/EscolhaEntregador'
import Pagamento from '../screens/Pagamento'
import { createStackNavigator } from 'react-navigation';



const MainNavigator = createStackNavigator({
        
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
    },

    Mercados2:{
        screen:Mercados2
    },

    Categorias2:{
        screen:Categorias2
    },

    Itens:{
        screen:Itens
    },

    EscolhaEntregador:{
        screen:EscolhaEntregador
    },

    Pagamento:{
        screen:Pagamento
    }
});

    export default MainNavigator;