import React from 'react'
import DashboardLayout from "./../layout/DashboardLayout";
import { Button, Form, Input, notification } from 'antd';
import {collection, addDoc} from 'firebase/firestore';
import {db} from "../firebase/firebaseConfig";
import {useNavigate} from 'react-router-dom';
import { useAuth } from './../contexts/AuthContext';

export default function CreateLinkPage() {
  const navigate = useNavigate()
  const { user } = useAuth();
  
  
  const onFinish = async (values) => {
    const data = {
      link : values.link,
      linkq : "1",
      user_id : user.uid
  }

    try {
      const docRef = await addDoc(collection(db, "links"), data);

      navigate("/links")
      
      notification.open({
        message: 'Mensaje',
        description:
          'Se ha agregado el link correctamente',
        duration: 2,
      });

      } catch (e) {
      console.error("Error: ", e);
      }

  };

  const onFinishFailed = (errorInfo) => {
     console.log('Failed:', errorInfo);
  };

  
  return (
    <DashboardLayout>
    <Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="link"
        name="link"
        rules={[
          {
            required: true,
            message: 'Entre el link',
          },
        ]}
      >
      <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
           Guardar
        </Button>
      </Form.Item>
    </Form>
    </DashboardLayout>
  )
}
