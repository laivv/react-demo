import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Menu } from 'antd';
// import './style.css'
import 'antd/dist/antd.css';


export default class Home extends React.Component {
  componentDidMount(){
    document.title = '首页';
    console.log('首页组件已挂载')
  }
  render() {
    return (
      <div>
       home

      </div>
    )
  }
}
