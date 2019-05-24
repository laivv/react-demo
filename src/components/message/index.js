import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Menu, Comment, Avatar, Tooltip, Icon } from 'antd';
// import './style.css'
import 'antd/dist/antd.css';


export default class Message extends React.Component {
  componentDidMount() {
    document.title = '留言';
  }
  like() {

  }
  dislike() {

  }
  render() {
    const action = 'liked';
    const actions = [
      <span>
        <Tooltip title="Like">
          <Icon
            type="顶"
            theme={action === 'liked' ? 'filled' : 'outlined'}
            onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>1</span>
      </span>,
      <span>
        <Tooltip title="Dislike">
          <Icon
            type="踩"
            theme={action === 'disliked' ? 'filled' : 'outlined'}
            onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>2</span>
      </span>,
      <span>回复</span>,
    ];

    return (
      <div>
        <Comment
          actions={actions}
          author={<a>游客</a>}
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="游客"
            />
          }
          content={
            <p>
              测试测试测试测试测试测试测试测试测试测试测试测试
          </p>
          }
          datetime={
            <Tooltip title="2019-05-20">
              <span>5分钟前</span>
            </Tooltip>
          }
        />
      </div>
    )
  }
}
