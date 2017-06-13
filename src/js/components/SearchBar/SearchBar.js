import React, {Component} from 'react';
import {Row, Col} from 'antd';
import {
	Menu,
	Icon,
	Tabs,
	message,
	Form,
	Input,
	Button,
	CheckBox,
	Modal
} from 'antd';

import './style.css'

const Search = Input.Search;
class SearchBar extends React.Component{
  constructor(props, context) {
       super(props, context);
        this.state = {
          value: 'ISBN',
          focused: false,
      };

   }
  render(){
    return(
      <div id ="home-searchbar">
      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <div className="home-searchbar-left float-left">
          <h1>OpenISBN</h1>
          </div>
        </Col>

        <Col xs={{ span: 20}} lg={{ span: 8 }}>
        <Search placeholder="ISBN or Book Title" style={{ width: 500, height: 40 }} onSearch={value => console.log(value)}/>
        </Col>

        </Row>

    </div>

    )
  }
}

export default SearchBar
