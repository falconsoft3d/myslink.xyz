import React from 'react'
import { Col, Row, Button, Form, Input, notification } from 'antd';
import HomeLayout from '../layout/HomeLayout'
import { Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import "./LoginPage.css";

export default function LoginPage() {
  const { Title, } = Typography;
  const onFinish = (values) => {
    console.log('Success:', values);

    notification.open({
      message: 'Mensaje',
      description:
        'Se ha inciado sección correctamente',
      onClick: () => {
        console.log('Notification Clicked!');
      },
      duration: 2,
    });
  };

  return (
    <HomeLayout>
      <br></br>
      <br></br>
      <Row>
        <Col span={12} offset={6}>
          <Title>Entrar</Title>
          <br />

          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'El emaail es requerido!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" type='email' />} placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'La constraseña es requerida!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Contraseña"
              />
            </Form.Item>
            

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Entrar
              </Button>
              <br></br>
              O <a href="/register">registrate ahora!</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </HomeLayout>
  )
}
