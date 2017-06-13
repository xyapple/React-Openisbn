import React, {Component} from 'react';
import ReactDom from 'react-dom';

import HeaderComponent from './components/Header.js';
import FooterComponent from './components/Footer.js';

export default class Root extends React.Component{
  render(){
    return (
      <div>
      <HeaderComponent />
      <h1>Hello World</h1>
      <FooterComponent />
      </div>
    );
  };

}
ReactDom.render(
  <Root/>, document.getElementById('mainContainer')
)
