import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import Authentication_Service from '../../Api/Authentication_Service';


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


    const onFinish = (values: any) => {
        Authentication_Service.login(values.username, values.password).then((res) => {
            debugger
            if (res.status === 200) {
                localStorage.setItem("userInfo", JSON.stringify(res.data.data));
                return navigate('/');
            }
        });
    };

    return (
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}
            style={{ maxWidth: 600, margin: "auto", marginTop: "10%" }} >
            <div>Đăng nhập hệ thống</div>
            <Form.Item name="username" label="Username" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                <Input type='password' />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Đăng nhập
                </Button>
            </Form.Item>
        </Form>
    );
}
