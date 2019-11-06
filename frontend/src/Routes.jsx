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
import Categories from "./Categories";
import ProfilePJ from "./ProfilePJ";
import ProfilePF from "./ProfilePF";
import SigninAdmin from "./SigninAdmin";
import viewStores from "./viewStores";
import ShopCategory from "./ShopCategory";
import Spinner from "./Spinner"
import ProfileAdmin from "./ProfileAdmin";
import AddStores from "./AddStores";
import ProfileEntregador from "./ProfileEntregador";
import Entregador from "./Entregador"
import ProfileEntEdit from "./ProfileEntEdit"
import Mercados from "./Mercados"
import MercadoList from "./MercadoList"
import SuperMercado from "./SuperMercado"
import NewStore from "./NewStore"
import AddStore from "./AddStore"
import NewProducts from "./NewProducts"
import AddItems from "./AddItems"

export default class Routes extends Component {

  componentDidmo
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
                  <PrivateRouteUser exact path="/stores" component={Stores} />
                  <PrivateRouteUser exact path="/add_itens" component={AddItems} />
                  <PrivateRouteUser exact path="/novo_produtos" component={NewProducts} />
                  <PrivateRouteUser exact path="/new_store" component={NewStore} />
                  <PrivateRouteUser exact path="/mercados" component={Mercados} />
                  <PrivateRouteUser exact path="/entregador_edit" component={ProfileEntEdit} />
                  <PrivateRouteUser exact path="/entregador" component={Entregador} />
                  <PrivateRouteUser exact path="/profilePF" component={ProfilePF} />
                  <PrivateRouteUser exact path="/pessoa_fisica" component={PessoaF} />
                  <PrivateRouteUser exact path="/pessoa_juridica" component={PessoaJ} />
                  <PrivateRouteUser exact path="/pessoa_juridica_edit" component={PessoaJEdit} />
                  <PrivateRouteUser exact path="/pessoa_fisica_edit" component={PessoaPFEdit} />
                    <PrivateRouteUser exact path="/dashboard" component={Dashboard} />
                    <PrivateRouteUser exact path="/profile" component={Profile} />
                    <PrivateRouteUser exact path="/store/:name/:rua/:id" component={Categories} />
                    <PrivateRouteUser exact path="/store/:name/:rua/:id/:cat" component={ShopCategory} />
                    <PrivateRouteUser exact path="/choose_profile" component={ChooseProfile} />
                    <PrivateRouteUser exact path="/profilePJ" component={ProfilePJ} />
                    <PrivateRouteUser exact path="/profile_admin" component={ProfileAdmin} />
                    <PrivateRouteUser exact path="/add_stores" component={AddStores} />
                    <PrivateRouteUser exact path="/profile_entregador" component={ProfileEntregador} />
                    <Route exact path="/admin/20192019" component={SigninAdmin}/>
                    <PrivateRouteUser exact path="/mercados/:store_url" component={MercadoList} />
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
