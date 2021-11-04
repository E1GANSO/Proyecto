import React from "react";
import {Route, Switch} from 'react-router-dom'
import Store from './pages/Store'
import About from './pages/About'
import Cartproduct from "./pages/Cartproduct";

export default function MisRoutes(){
    return(
        <Switch>
             <Route exact path='/' component = {Store}/>
             <Route exact path='/About' component = {About}/>
             <Route exact path='/ItemCart' component ={Cartproduct}/>
        </Switch>
    );
}