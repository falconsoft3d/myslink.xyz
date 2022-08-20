import React from 'react'
import { Menu } from "antd";
import "antd/dist/antd.css";
import {Link} from "react-router-dom";

export default function NavBar() {
  return (
    <Menu mode="horizontal">
        <Menu.Item><Link to="/">Home</Link></Menu.Item>
        <Menu.Item><Link to="/login">Entrar</Link></Menu.Item>
        <Menu.Item><Link to="/register">Registrar</Link></Menu.Item>
        <Menu.Item><Link to="/links">Links</Link></Menu.Item>
      </Menu>
  )
}
