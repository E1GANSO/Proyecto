import React from "react";
import {Route, Switch} from 'react-router-dom'
import Store from './Store'
import About from './About';
import ItemCart from "./ItemCart";



export default function MisRoutes(){
    return(
        <Switch>
             <Route exact path='/' component = {Store}/>
             <Route exact path='/About' component = {About}/>
             <Route exact path='/Cart' component = {ItemCart}/>
        </Switch>
    );
}