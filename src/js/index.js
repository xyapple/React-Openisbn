import React, {Component} from 'react';
import ReactDom from 'react-dom';

import {Route, BrowserRouter,Switch} from 'react-router-dom';
import Button from 'antd/lib/button';

import HeaderComponent from './components/Header/Header.js';
import FooterComponent from './components/Footer/Footer.js';
import SearchBar from './components/SearchBar/SearchBar.js'
import BookGallery from './/components/BookGallery/BookGallery.js'

import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';

import App from './components/App.js';

class Root extends React.Component{
  constructor(props){
    super(props);
  };
  render(){
    return (
      <div>
          {/**
            <div>
            <HeaderComponent />
            </div>
            <div>
            <SearchBar />
            </div>
            <div>
            <BookGallery />
            </div>
            */}
         <App />
      <FooterComponent />
      </div>
    );
  };

}
ReactDom.render(
  <Root/>, document.getElementById('mainContainer')
)
export default Root
