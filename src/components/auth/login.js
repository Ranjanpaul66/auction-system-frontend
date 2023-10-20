import React from 'react';
import {Row, Col, Button, Form, Input, Typography} from 'antd';
import './css/login.css'
const {Title, Text, Link} = Typography

function Login(props) {
    return (
        <>
            <Row align="middle">
                <Col className="gutter-row" span={10} offset={2}>
                    <div className='main-form'>
                        <div className='form-header'>
                            <Title style={{textAlign: "center", fontWeight: 700,
                                fontSize: '30px',
                                width: '295px',
                                height:' 42px',
                                lineHeight: '42px'}}>
                                Login to Continue
                            </Title>
                            <Text type="secondary" style={{fontWeight: 300,
                                fontSize: '16px',
                                textAlign: "right"
                            }}>
                                Welcome please enter your email address
                            </Text>

                        </div>

                        <div className='login-form'>
                            <Form
                                layout={"vertical"}
                                name="basic"

                                /*onFinish={}
                                onFinishFailed={}*/
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="Email"
                                    style={{
                                        width: '410px',
                                        marginBottom: '30px',
                                        height: '50px',
                                        fontWeight: 600}}
                                    name="email"
                                    rules={[
                                        {
                                            required: false,
                                            message: 'Please input your Login ID!',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Ex: email id" />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    style={{
                                        width: '410px',
                                        height: '50px',
                                        marginBottom: '40px',
                                        fontWeight: 600}}
                                    rules={[
                                        {
                                            required: false,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password placeholder="Min. 8 characters" />
                                </Form.Item>


                                <Form.Item>
                                    <Button type="primary" block htmlType='submit'>
                                        Login
                                    </Button>
                                </Form.Item>
                                <Form.Item  wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}>
                                    <a className="login-form-forgot" href="">
                                        Forgot password
                                    </a>
                                </Form.Item>


                            </Form>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row" span={12} >
                    <div className="aside-image">
                    </div>
                </Col>
            </Row>

        </>
    );
}

export default Login;