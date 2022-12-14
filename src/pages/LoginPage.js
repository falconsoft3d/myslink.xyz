import React from 'react'
import { Col, Row, Button, Form, Input, notification } from 'antd';
import HomeLayout from '../layout/HomeLayout'
import { Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import "./LoginPage.css";
import { auth } from './../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const { Title, } = Typography;

  const onFinish = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      navigate('/admin/links');
      notification.open({ message: "Hola", description: "Bienvenido", duration: 2 });
    } catch (error) {
      let mensaje;
      switch (error.code) {
        case 'auth/wrong-password':
          mensaje = 'La contraseña no es correcta.'
          break;
        case 'auth/user-not-found':
          mensaje = 'No se encontro ninguna cuenta con este correo electrónico.'
          break;
        default:
          mensaje = 'Hubo un error al intentar crear la cuenta.'
          break;
      }
      notification.open({ message: "Error", description: mensaje, duration: 2 });
    }
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
              O <a href="/admin/register">registrate ahora!</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </HomeLayout>
  )
}
