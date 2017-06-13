import React, {Component} from 'react';
import ReactDom from 'react-dom';

import HeaderComponent from './components/header.js'

export default class Root extends React.Component{
  render(){
    return (
      <div>
      <HeaderComponent />
      <h1>Hello World</h1>
      </div>
    );
  };

}
ReactDom.render(
  <Root/>, document.getElementById('mainContainer')
)
