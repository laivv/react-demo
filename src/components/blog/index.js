import React from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { Nav } from '../nav/';
class Blog extends React.Component {

  componentDidMount(){
    document.title = '博客'
    console.log('博客组件已挂载')
  }
  render() {
    return (

      <div>
        <Nav></Nav>
        文章列表
      </div>
    )
  }
}

export default withRouter(Blog)
