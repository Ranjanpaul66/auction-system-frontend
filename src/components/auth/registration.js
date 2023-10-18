import React, {useState} from 'react';
import {AutoComplete, Button, Cascader, Checkbox, Col, Form, Input, InputNumber, Row, Select} from "antd";
import './css/registration.css'

function Registration(props) {
    const [form] = Form.useForm();

    const handleSubmit = (e) => {
        e.preventDefault();

        form.validateFields((err, values) => {
            if (!err) {
                // Submit the form data to your backend server
            }
        });
    };
    return (
        <>
            <Row></Row>
            <Row justify="center">
                <Form layout="horizontal">
                    <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please enter a username.' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email address.' }, { type: 'email', message: 'Please enter a valid email address.' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter a password.' }, { min: 6, message: 'Password must be at least 6 characters long.' }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item label="Confirm Password" name="confirm_password" rules={[{ required: true, message: 'Please confirm your password.' }, { validator: (rule, value) => { if (value !== this.getFieldValue('password')) { return Promise.reject('Passwords must match.'); } return Promise.resolve(); }}]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Register</Button>
                    </Form.Item>
                </Form>
            </Row>
        </>



    );
}

export default Registration;