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
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Menu mode="horizontal">
      <Menu.Item><Link to="/">Home</Link></Menu.Item>
      {!user &&
        <>
          <Menu.Item><Link to="/login">Login</Link></Menu.Item>
          <Menu.Item><Link to="/register">Registrar</Link></Menu.Item>
        </>
      }
      {user &&
        <>
          <Menu.Item><Link to="/links">Links</Link></Menu.Item>
          <Menu.Item onClick={logout}>Cerrar</Menu.Item>
        </>
      }
    </Menu>
  )
}
