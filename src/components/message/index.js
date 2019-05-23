import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Menu } from 'antd';
// import './style.css'
import 'antd/dist/antd.css';
import { Nav } from '../nav';

export default class Message extends React.Component {
  componentDidMount(){
    document.title = 'message';
    console.log('message组件已挂载')
  }
  render() {
    return (
      <div>
        <Nav></Nav>
       message

      </div>
    )
  }
}
