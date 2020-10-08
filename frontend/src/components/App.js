import React,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';

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
    <Fragment>
  <Header/>
  <Alerts/>
  <div className="container" >

  <Dashboard/>
  </div>
 
</Fragment>
</AlertProvider>
</Provider>        
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('app'));