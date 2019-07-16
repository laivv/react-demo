import React from 'react';
import { Button ,Pagination,Empty} from 'antd';
import { withRouter } from 'react-router-dom';

class Blog extends React.Component {

  componentDidMount(){
    document.title = '归档'
  }
  render() {
    return (
      <React.Fragment>
        <Empty description="博主太懒啦，什么都没写~"/>
        <Pagination defaultCurrent={1} total={50} />
      </React.Fragment>
    )
  }
}

export default withRouter(Blog)
