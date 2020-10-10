import React,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';

import {HashRouter as Rouetr,Route, Switch,Redirect } from "react-router-dom"
//react alaert compo

import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'; 


import Header from './layout/Header';

import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';

//react alert 


//redux
import {Provider} from 'react-redux';
import store from '../store';


//lert option 

const options = {
    timeout: 3000,
    position: 'top center'
}
class App extends Component {


    render() {

        return (
<Provider store={store}>

    <AlertProvider template={AlertTemplate} {...options} >
    
    <Rouetr>
    <Fragment>
  <Header/>
  <Alerts/>
  <div className="container" >
<Switch>

<Route exact path="/" component ={Dashboard}/>

</Switch>
  </div>
 
</Fragment>
</Rouetr>
</AlertProvider>
</Provider>        
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'));