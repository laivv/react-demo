import React from 'react';
import { Link } from 'react-router-dom';
import { Divider} from 'antd';
// import './style.css'
import 'antd/dist/antd.css';
import './style.css';



export default class Footer extends React.Component {
  componentDidMount(){
  }
  render() {
    return (
        <Divider>©2019 蜀ICP备16027289号-1 </Divider>
    )
  }
}
