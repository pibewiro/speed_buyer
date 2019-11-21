import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"
import Login from "./Login"
import Details from "./Details"
import Menu from "./Menu"
import Profile from "./Profile"
import LandingPage from "./LandingPage"
import Register from "./register"
import PessoaF from "./PessoaF"
import PessoaJ from "./PessoaJ"
import Entregador from "./Entregador"
import Mercados from "./Mercados"


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
   Mercados:{screen:Mercados}
})

export default Routers = createAppContainer(AppNavigator)