import {
  HomeOutlined,
  FileOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from "react-router-dom";
import {auth} from './../firebase/firebaseConfig';
import {signOut} from 'firebase/auth';

const { Header, Content, Footer, Sider } = Layout;

export default function DashboardLayout(props) {
    const {children} = props;
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

  const logout = async() => {
		try {
			await signOut(auth);
			navigate('/admin/login');
		} catch(error){
			console.log(error);
		}
	}
    return (
    <>

<Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['links']}>
            <Menu.Item key="home">
              <Link to="/"><HomeOutlined /> Inicio</Link>
            </Menu.Item>
            <Menu.Item key="links">
              <Link to="/admin/links"><FileOutlined/> Mis Links</Link>
            </Menu.Item>
            <Menu.Item key="link">
              <Link to="/admin/create-link"><FileOutlined/> Crear Link</Link>
            </Menu.Item>
            <Menu.Item key="close">
              <Link to="/" onClick={logout}><LoginOutlined /> Cerrar</Link>
            </Menu.Item>
        </Menu>
      
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item><Link to="/">Inicio</Link></Breadcrumb.Item>
            <Breadcrumb.Item>Links</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Marlon Falcón ©2022
        </Footer>
      </Layout>
    </Layout>
    </>
  )
}
