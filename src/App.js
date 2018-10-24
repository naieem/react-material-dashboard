import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './style.css';
import Header from 'Package/Header';
import Footer from 'Package/Footer';
import Sidebar from 'Package/Sidebar';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import Product from './Components/Products';
class App extends Component{
   constructor(props){
      super(props);
   }
   render(){
      return(
         <div>
             <Sidebar/>
             <Header/>
             <div className="main-container">
                 <Route exact path="/" component={Dashboard} />
                 <Route path="/about" component={About} />
                 <Route path="/production" component={Product} />
             </div>
             <Footer/>
         </div>
      );
   }
}
export default App;