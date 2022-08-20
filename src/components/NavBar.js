import React from 'react'
import { Menu } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { auth } from './../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './../contexts/AuthContext';

export default function NavBar() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const logout = async () => {
    try {
      await signOut(auth);
      navigate('/admin/login');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Menu mode="horizontal">
      <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
      {!user &&
        <>
          <Menu.Item key="2"><Link to="/admin/login">Login</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/admin/register">Registrar</Link></Menu.Item>
        </>
      }
      {user &&
        <>
          <Menu.Item key="4"><Link to="/admin/links">Links</Link></Menu.Item>
          <Menu.Item key="5" onClick={logout}>Cerrar</Menu.Item>
        </>
      }
    </Menu>
  )
}
