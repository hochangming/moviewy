import React, { useState,useEffect, Component } from 'react'; 
import './App.css';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Review from './Screen/Reviews'; 
import Homescreen from './Screen/Homescreen';
import NewUpdatedScreen from './Screen/NewUpdatedScreen';
class App extends Component{

  render() {
    return (
      <BrowserRouter> 
      <Switch> 
        <Route exact path="/"  
        component={Homescreen} />

        <Route path="/review"  
        component={Review}/> 

        <Route path="/updated" 
        component={NewUpdatedScreen}/>
      </Switch>
    </BrowserRouter>
    );
  }

}

export default App;
