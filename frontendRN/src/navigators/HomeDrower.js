import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomDrawer from '../components/CustomDrawer'
import firebase from '../components/FirebaseConnection';
import { Image} from 'react-native'


import menuInicial from '../navigators/StackMenuInicial';
import Perfil from '../navigators/stackPerfil';
import Pedidos from '../navigators/StackPedidos';
import Mercados from '../navigators/stackMercados';
import Categorias from '../navigators/StackCategorias';
import MinhaLista from '../navigators/StackListaCompras';
import MeuCarrinho from '../navigators/StackMeuCarrinho';
import Promocoes from '../navigators/StackPromocoes';
import Favoritos from '../navigators/StackFavoritos';
import CentralAjuda from '../navigators/StackCentralAjuda';



const HomeDrawer = createDrawerNavigator({

Inicio:{
     screen:menuInicial,
     navigationOptions:{
         drawerLabel: 'Inicio', 
                  
     }
},
Perfil:{
    screen:Perfil
},
Pedidos:{
    screen:Pedidos
},
Mercados:{
    screen:Mercados
},
Categorias:{
    screen:Categorias
},  
MinhaLista:{
    screen:MinhaLista,
    navigationOptions:{
        drawerLabel: 'Lista de Compras',          
    }
},
MeuCarrinho:{
    screen:MeuCarrinho,
    navigationOptions:{
        drawerLabel: 'Carrinho',          
    }
},
Promocoes:{
    screen:Promocoes,
    navigationOptions:{
        drawerLabel: 'Promoções',          
    }
},
Favoritos:{
    screen:Favoritos
},
CentralAjuda:{
    screen:CentralAjuda,
    navigationOptions:{
        drawerLabel: 'Central de Ajuda',          
    }
}
    
}, {
    contentComponent:(props) =><CustomDrawer {...props}/>,
    hideStatusBar:true,
    contentOptions:{
        activeTintColor:'#ff0000',
        activeBackgroundColor:'#eee'
        
    }
});

export default HomeDrawer;

  