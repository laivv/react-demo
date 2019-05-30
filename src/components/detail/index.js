import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
// import './style.css'
import 'antd/dist/antd.css';



class CommentForm extends React.Component {

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const { getFieldDecorator } = this.props.form;
    return (
      <Form {...formItemLayout} >
        <Form.Item label="邮箱">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: '无效的邮箱',
              },
              {
                required: true,
                message: '请输入你的邮箱',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="称呼">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '请输入你的称呼',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="内容">
          {getFieldDecorator('content', {
            rules: [
              {
                required: true,
                message: '请输入内容',
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    )
  }
}
const WrappedCommentForm = Form.create({ name: 'comment_form' })(CommentForm);
export default class Detail extends React.Component {
  componentDidMount() {
    document.title = "详情"
  }
  render() {
    return <WrappedCommentForm />
  }
}

