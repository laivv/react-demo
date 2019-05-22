import React from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';

class Blog extends React.Component {

  componentDidMount(){
    document.title = '博客'
    console.log('博客组件已挂载')
  }
  render() {
    return (
      <div>
        <Button>我是blog</Button>
      </div>
    )
  }
}

export default withRouter(Blog)
