import React, {Component} from 'react';
import {Row, Col} from 'antd';

export default class FooterComponent extends React.Component {
  render(){
    return (
      <footer>
        <Row>
  					<Col span={2}></Col>
  					<Col span={20} class="footer">
              &copy;&nbsp;2010 OpenISBN Project. All Rights Reserved.
  					</Col>
  					<Col span={2}></Col>
  				</Row>
      </footer>
    )
  }
}
