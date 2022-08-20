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
      <Menu.Item><Link to="/">Home</Link></Menu.Item>
      {!user &&
        <>
          <Menu.Item><Link to="/admin/login">Login</Link></Menu.Item>
          <Menu.Item><Link to="/admin/register">Registrar</Link></Menu.Item>
        </>
      }
      {user &&
        <>
          <Menu.Item><Link to="/admin/links">Links</Link></Menu.Item>
          <Menu.Item onClick={logout}>Cerrar</Menu.Item>
        </>
      }
    </Menu>
  )
}
