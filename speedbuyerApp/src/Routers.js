import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"
import Login from "./Login"
import Menu from "./Menu"
import LandingPage from "./LandingPage"
import Register from "./register"
import PessoaF from "./PessoaF"
import PessoaJ from "./PessoaJ"
import Entregador from "./Entregador"
import Mercados from "./Mercados"
import Mercados2 from "./Mercados2"
import PessoaJE from "./PessoaJE"
import Categorias2 from "./Categorias2"
import Itens from "./Itens"
import EscolhaEntregador from "./EscolhaEntregador"
import Pagamento from "./Pagamento"
import Favoritos from "./Favoritos"
import Promocoes from "./Promocoes"
import CompararPreco from "./CompararPreco"
import Profile from "./Profile"

const AppNavigator = createStackNavigator({

   Landing:{screen:LandingPage},
   Login:{screen:Login},
   Menu:{screen:Menu, 
      navigationOptions:  {
         headerLeft: null
     }
   },
   Profile:{screen:Profile},
   Register:{screen:Register},
   PessoaJ:{screen:PessoaJ},
   PessoaF:{screen:PessoaF},
   Entregador:{screen:Entregador},
   Mercados:{screen:Mercados},
   Mercados2:{screen:Mercados2},
   PessoaJE:{screen:PessoaJE},
   Categorias2:{screen:Categorias2},
   Itens:{screen:Itens},
   EscolhaEntregador:{screen:EscolhaEntregador},
   Pagamento:{screen:Pagamento},
   Favoritos:{screen:Favoritos},
   Promocoes:{screen:Promocoes},
   CompararPreco:{screen:CompararPreco},
   Profile:{screen:Profile}
})

export default Routers = createAppContainer(AppNavigator)