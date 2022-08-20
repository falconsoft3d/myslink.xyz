import React from 'react'
import { Col, Row, Button, Form, Input, notification } from 'antd';
import HomeLayout from '../layout/HomeLayout'
import { Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import "./LoginPage.css";
import { auth } from './../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { Title, } = Typography;

  const onFinish = async (values) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      navigate('/admin/links');
      notification.open({ message: "Hola", description: "Bienvenido", duration: 2 });
    } catch (error) {
      let mensaje;
      switch (error.code) {
        case 'auth/invalid-password':
					mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.'
					break;
				case 'auth/email-already-in-use':
					mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
				break;
				case 'auth/invalid-email':
					mensaje = 'El correo electrónico no es válido.'
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
          <Title>Registrate</Title>
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

            <Form.Item
              name="password2"
              rules={[{ required: true, message: 'La constraseña es requerida!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Repite la Contraseña"
              />
            </Form.Item>


            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Registrar
              </Button>
              <br></br>
              O <a href="/admin/login">Ya tienes cuenta!</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </HomeLayout>
  )
}