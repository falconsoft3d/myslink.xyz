import React from 'react'
import { Menu } from "antd";
import "antd/dist/antd.css";


const { SubMenu } = Menu;

export default function NavBar() {
  return (
    <Menu mode="horizontal">
        <SubMenu title="Home"/>
        <SubMenu title="Registrar"/>
        <SubMenu title="Iniciar Sección"/>
        <SubMenu title="Mis Links"/>
        <SubMenu title="Código Fuente"/>
      </Menu>
  )
}
