import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Menu } from 'antd';
// import './style.css'
import 'antd/dist/antd.css';



export default class Home extends React.Component {
  componentDidMount(){
    document.title = '首页';
  }
  render() {
    return (
      <div>
        这是首页组件
      </div>
    )
  }
}
