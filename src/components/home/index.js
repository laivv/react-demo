import React from 'react';
import { Link } from 'react-router-dom';
import { Button, List, Avatar, Icon } from 'antd';
// import './style.css'
import 'antd/dist/antd.css';



export default class Home extends React.Component {
  componentDidMount() {
    document.title = '首页';
  }
  render() {
    const listData = [];
    for (let i = 0; i < 23; i++) {
      listData.push({
        title: `文章标题 ${i}`,
        // avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
          '文章描述',
        content:
          '文章内容',
      });
    }
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );

    return (
      <React.Fragment>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <IconText type="star-o" text="156" />,
                <IconText type="like-o" text="156" />,
                <IconText type="message" text="2" />,
              ]}
              extra={
                <Button>
                  <Link to="/detail">阅读更多</Link>
                </Button>
              }
            >
              <List.Item.Meta
                // avatar={<Avatar src={item.avatar} />}
                title={<Link to="/detail">{item.title}</Link>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </React.Fragment>
    )
  }
}
