import React, { Component } from 'react'
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './Dashboard';
import BodyTemplate from './BodyTemplate';
import Landing from './landing';
import Account from './account';
import Signin from './signin';
import Signup from "./signup";
import ChooseProfile from "./ChooseProfile";
import Profile from "./Profile";
import PessoaF from "./PessoaF";
import PessoaJ from "./PessoaJ";
import Stores from "./Stores";
import Dalben from "./Dalben";

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
                  <PrivateRouteUser exact path="/account" component={Account} />
                  <PrivateRouteUser exact path="/stores" component={Stores} />
                  <PrivateRouteUser exact path="/pessoa_fisica" component={PessoaF} />
                  <PrivateRouteUser exact path="/pessoa_juriduca" component={PessoaJ} />
                    <PrivateRouteUser exact path="/dashboard" component={Dashboard} />
                    <PrivateRouteUser exact path="/profile" component={Profile} />
                    <PrivateRouteUser exact path="/items/Dalben" component={Dalben} />
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/choose_profile" component={ChooseProfile} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/signup" component={Signup} />
                </Switch>
            </Router>
            </>
        )
    }
}
