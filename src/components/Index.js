import React from 'react';
import { Button, Input, Menu } from 'antd';
import './Index.css'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Menu mode="horizontal" className="flex">
          <Menu.Item>首页</Menu.Item>
          <Menu.Item>日志</Menu.Item>
          <Menu.Item>分类</Menu.Item>
          <Menu.Item>
            <Input.Search
              placeholder="搜索内容"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
