import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home'
import Signin from './pages/signin'
import Signup from './pages/signup'
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/signin" component={Signin} />
                    <Route path="/signup" component={Signup} />
                    <Redirect to="/home" />
                </Switch>                
            </div>
        )
    }
}