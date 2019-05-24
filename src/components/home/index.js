import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
// import './style.css'
import 'antd/dist/antd.css';



export default class Home extends React.Component {
  componentDidMount(){
    document.title = '首页';
  }
  render() {
    return (
      <div>
        <Button>
          <Link to="/article">查看详情</Link>
        </Button>
      </div>
    )
  }
}
