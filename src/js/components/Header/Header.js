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
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

import {Link} from 'react-router-dom';

class HeaderComponent extends React.Component {
 constructor(){
   super();
   this.state ={
     current:'top',
     modalVisible: false,
     action:'login',
     hasLogined: false,
     userName:'',
     userId:0
   };
 };

 componentWillMount(){
   if(localStorage.userId = ''){
     this.setState({hasLogined:true});
     this.setState({
       userName: localStorage.userName,
       userId: localStorage.userId
     });
   }
 };

 setModalVisible(value){
   this.setState({modalVisible: value});

 };

 handleClick(e){
   if(e.key == "register"){
     this.setState({current: 'register'});
     this.setModalVisible(true);
   } else{
     {
       this.setState({current:e.key})
     }
   }
 };

handleSubmit(e){
  e.preventDefault();
  var myFetchOptions = {
    method: 'GET'
  };
  //get the data from API
  var formData = this.props.form.getFieldsValue();
  console.log(formData);
  fetch("http://newsapi.gugujiankong.com/Handler.ashx?action="
  + this.state.action
  + "&username="+formData.userName+"&password="+formData.password
  +"&r_userName=" + formData.r_userName + "&r_password="
  + formData.r_password + "&r_confirmPassword="
  + formData.r_confirmPassword, myFetchOptions
  ).then(response => response.json())
  .then(json => {
			this.setState({userName: json.UserName, userId: json.UserId});
			localStorage.userId= json.UserId;
			localStorage.userName = json.UserName;
		});
    if (this.state.action=="login") {
			this.setState({hasLogined:true});
		}
    message.success("success");
		this.setModalVisible(false);
};

callback(key) {
		if (key == 1) {
			this.setState({action: 'login'});
		} else if (key == 2) {
			this.setState({action: 'register'});
		}
	};
	logout(){
		localStorage.userId= '';
		localStorage.userName = '';
		this.setState({hasLogined:false});
	};

  render() {
    const { getFieldDecorator } = this.props.form;
		const userShow = this.state.hasLogined
			? <Menu.Item key="logout" class="register">
					<Button type="primary" htmlType="button">{this.state.userNickName}</Button>
					&nbsp;&nbsp;
					<Link target="_blank" to={`/usercenter`}>
						<Button type="dashed" htmlType="button">User Account</Button>
					</Link>
					&nbsp;&nbsp;
					<Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>Log Out</Button>
				</Menu.Item>
			: <Menu.Item key="register" class="register">
				<Icon type="appstore"/>Register/Login
			</Menu.Item>;
    return (
      <header>
      				<Row>
      					<Col span={3}>
      						{/**<a href="/" class="logo">
                    <h1>OpenISBN</h1>
      							<img src="/src/images/logo.png" alt="logo"/>
      						</a>*/}
      					</Col>
      					<Col span={20}>
      						<Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
      							<Menu.Item key="top">
      								<Icon type="appstore"/>ISBN
      							</Menu.Item>
      							<Menu.Item key="shehui">
      								<Icon type="appstore"/>Title
      							</Menu.Item>
      							<Menu.Item key="guonei">
      								<Icon type="appstore"/>Author
      							</Menu.Item>
      							<Menu.Item key="guoji">
      								<Icon type="appstore"/>Publisher
      							</Menu.Item>
      							<Menu.Item key="yule">
      								<Icon type="appstore"/>Reading
      							</Menu.Item>
      							<Menu.Item key="tiyu">
      								<Icon type="appstore"/>Bug Books
      							</Menu.Item>
      							<Menu.Item key="keji">
      								<Icon type="appstore"/>Free eBooks
      							</Menu.Item>
      							{userShow}
      						</Menu>
      						<Modal title="User Account" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} cancelText="Cancel" onOk={() => this.setModalVisible(false)} okText="Close">
      							<Tabs type="card" onChange={this.callback.bind(this)}>
      								<TabPane tab="Login" key="1">
      									<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
      										<FormItem label="Account">
      											{getFieldDecorator('userName')(<Input placeholder="Please enter your username" />)}
      										</FormItem>
      										<FormItem label="Password">
      											{getFieldDecorator('password')(<Input type="password" placeholder="Please enter your password" />)}
      										</FormItem>
      										<Button type="primary" htmlType="submit">Summit</Button>
      									</Form>
      								</TabPane>
      								<TabPane tab="Register" key="2">
      									<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
      										<FormItem label="Account">
      											{getFieldDecorator('r_userName')(<Input placeholder="Please enter your username"/>)}
      										</FormItem>
      										<FormItem label="Password">
      											{getFieldDecorator('r_password')(<Input type="password" placeholder="Please enter your password" />)}
      										</FormItem>
      										<FormItem label="Comfirm Password">
      											{getFieldDecorator('r_confirmPassword')(<Input type="password" placeholder="Please comfirm your password" />)}
      										</FormItem>
      										<Button type="primary" htmlType="submit">Register</Button>
      									</Form>
      								</TabPane>
      							</Tabs>
      						</Modal>
      					</Col>
      					<Col span={2}></Col>
      				</Row>

      			</header>

    );

  }
}
export default HeaderComponent = Form.create({})(HeaderComponent);
