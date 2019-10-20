import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './Dashboard';
import BodyTemplate from './BodyTemplate';
import Landing from './landing';
// import Account from './account';
import Signin from './signin';
import Signup from "./signup";
import ChooseProfile from "./ChooseProfile";
import Profile from "./Profile";
import PessoaF from "./PessoaF";
import PessoaJ from "./PessoaJ";
import PessoaJEdit from "./PessoaJEdit";
import PessoaPFEdit from "./PessoaPFEdit";
import Stores from "./Stores";
import Dalben from "./Dalben";
import ProfilePJ from "./ProfilePJ";
import ProfilePF from "./ProfilePF";
import SigninAdmin from "./SigninAdmin";
import viewStores from "./viewStores";





export default class Routes extends Component {
    render() {

        const PrivateRouteUser = ({ component: Component, ...rest }) => (
            <Route
            
              {...rest}
              render={props => (
             
                  <BodyTemplate>
                    <Component {...props} />
                  </BodyTemplate>
                ) 
              }
           />
          );

        return (
          <>
            <Router>
              <Switch>
                  {/* <PrivateRouteUser exact path="/account" component={Account} /> */}
                  <PrivateRouteUser exact path="/stores" component={Stores} />
                  <PrivateRouteUser exact path="/profilePF" component={ProfilePF} />
                  <PrivateRouteUser exact path="/pessoa_fisica" component={PessoaF} />
                  <PrivateRouteUser exact path="/pessoa_juridica" component={PessoaJ} />
                  <PrivateRouteUser exact path="/pessoa_juridica_edit" component={PessoaJEdit} />
                  <PrivateRouteUser exact path="/pessoa_fisica_edit" component={PessoaPFEdit} />
                    <PrivateRouteUser exact path="/dashboard" component={Dashboard} />
                    <PrivateRouteUser exact path="/profile" component={Profile} />
                    <PrivateRouteUser exact path="/items/Dalben" component={Dalben} />
                    <PrivateRouteUser exact path="/choose_profile" component={ChooseProfile} />
                    <PrivateRouteUser exact path="/profilePJ" component={ProfilePJ} />
                    <Route exact path="/admin/20192019" component={SigninAdmin}/>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/view_stores" component={viewStores} />
                    <Route exact path="/signup" component={Signup} />
                </Switch>
            </Router>
            </>
        )
    }
}
