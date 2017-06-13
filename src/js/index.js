import React, {Component} from 'react';
import ReactDom from 'react-dom';


export default class Root extends React.Component{
  render(){
    return (
      <h1>Hello World</h1>
    );
  };

}
ReactDom.render(
  <Root/>, document.getElementById('mainContainer')
)
