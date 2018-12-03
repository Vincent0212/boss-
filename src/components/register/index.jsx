import React, {Component} from 'react';
import {NavBar, WingBlank, WhiteSpace, List, InputItem, Radio, Button } from 'antd-mobile';

import Logo from '../logo';

const Item = List.Item;

class Register extends Component {
    state = {
      laoban : false,
      username : '',
      password : '',
      rePassword :''
    }
  handleChange = (type,value) =>{
      this.state({
        [type] : value
      })
  }
  //手机数据
  register = () =>{
      const {laoban, password, rePassword, username} = this.state;
      console.log(laoban, password, rePassword, username);
  }
  render () {
    const {laoban} = this.state;
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <InputItem onClick={val=>this.handleChange('username',val)}>用户名</InputItem>
            <InputItem onClick={val=>this.handleChange('password', val)}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
            <InputItem onClick={val=> this.handleChange('rePassword',val)}>确认密码:</InputItem>
            <WhiteSpace />
            <Item>
              用户类型:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio checked={!laoban} onClick={this.handleChange.bind(null, 'laoban', false)}>大神</Radio> &nbsp;&nbsp;&nbsp;
              <Radio checked ={laoban} onClick={this.handleChange.bind(null, 'laoban', true)}> </Radio>
            </Item>
            <WhiteSpace />
            <Button type="primary" onClick={this.register}>注册</Button>
            <Button onClick={this.goLogin}>已有账户</Button>
            <WhiteSpace />
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Register;