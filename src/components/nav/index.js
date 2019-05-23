import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Menu } from 'antd';
// import './style.css'
import 'antd/dist/antd.css';


export default class Nav extends React.Component {

  render() {
    return (
      <div>
        <Menu mode="horizontal" className="flex">
          <Menu.Item>
          <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/articles">归档</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/message"></Link>
          </Menu.Item>
          <Input.Search
              placeholder="搜索内容"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
        </Menu>

      </div>
    )
  }
}
