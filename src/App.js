import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import EditorBar from './components/Layout/EditorBar';
import AddFeature from './components/Feature/AddFeature';
import {Provider} from "react-redux";
import store from "./store/store"
import UpdateFeature from './components/Feature/UpdateFeature';
import FeatureTaskItem from './components/Feature/FeatureTaskItem';
import AddProduct from './components/Product/AddProduct';
import ProductTask from './components/Product/ProductTask';
import AddProductTask from './components/Product/AddProductTask';
import ProductBoard from './components/Product/ProductBoard';


class App extends Component {
  render(){
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
        <Header />
        <EditorBar />
       <Route exact path="/" component={Dashboard} />
       <Route exact path="/addFeature" component={AddFeature} />
       <Route exact path="/updateFeature/:id" component={UpdateFeature} />
       <Route exact path="/featureTask/:id" component={FeatureTaskItem} />
       <Route exact path="/addProduct" component={AddProduct} />
       <Route exact path="/productBoard/:id" component={ProductBoard} />
       <Route exact path="/addProductTask/:id" component={AddProductTask} />
       <Footer/>
      </div>
      </Router>
      </Provider>
    );

  }
  
}

export default App;
