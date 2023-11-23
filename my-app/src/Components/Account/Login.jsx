import React from 'react';
import "../../index.css"
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import Authentication_Service from '../../Api/Authentication_Service';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function LoginForm() {
  const [form] = Form.useForm();
  const navigate = useNavigate();


  const onFinish = (values) => {
    Authentication_Service.login(values.username, values.password).then((res) => {
      console.log("res", res)
      if (res.status === 200) {
        localStorage.setItem("userInfo", JSON.stringify(res.data.data));
        return navigate('/');
      }
    });
  };

  return (
    <div style={{ background: "url('https://anlocgroup.com/wp-content/uploads/2023/05/thiet-ke-shop-quan-ao-nam-13-jpg.webp')", backgroundSize: "cover", minHeight: "100vh"  }}>
      <Form
        name="normal_login"
        className="login-form"
        style={{ maxWidth: 300, margin: 'auto',paddingTop:"200px" }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox style={{ color: 'yellow' }}>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" style={{ float: 'right', color: 'blue' }} href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
            Log in
          </Button>
          Or <a style={{ color: 'blue' }} href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
