import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"
import Login from "./Login"
import Details from "./Details"
import Menu from "./Menu"


const AppNavigator = createStackNavigator({

   Login:{screen:Login},
   Menu:{screen:Menu, 
      navigationOptions:  {
         headerLeft: null
     }
   }
})

export default Routers = createAppContainer(AppNavigator)