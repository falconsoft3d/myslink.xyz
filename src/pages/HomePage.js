import React from 'react'
import HomeLayout from '../layout/HomeLayout'
import { Col, Row, Alert, Statistic, Timeline } from 'antd';
import { Typography } from 'antd';
import Marquee from 'react-fast-marquee';

export default function HomePage() {
  const { Title, Link } = Typography;
  return (
    <HomeLayout>
        <br/>
        <br/>
        <Row>
      <Col span={12} offset={6}>
          <Title>MySlink</Title>
          <Alert
    banner
    message={
      <Marquee pauseOnHover gradient={false}>
         Si quieres hacer una aplicación no dudes en contactarme y sigueme en GitHub. 
      </Marquee>
            }
        />
        <br/>
          <p>Acorta tus urls, utilizando  
              <Link href="https://ant.design" target="_blank"> Ant Design, </Link>
              <Link href="https://es.reactjs.org" target="_blank"> React, </Link>
              <Link href="https://firebase.google.com" target="_blank"> Firebase. </Link>
              Mi nombtre es Marlon Falcón, y si quieres seguir mi trabajo puedes seguirme en GitHub, Aqui te dejo el codigo fuente de layout
              aplicación para que lo puedas despegar:  <Link href="https://github.com/falconsoft3d/myslink.xyz" target="_blank"> MySlink. </Link>
          </p>
          <Alert message="Nombre: Marlon Fálcon Hernandez." type="success" />
          <br/>
          <Alert message="Email: mfalconsoft@gmail.com" type="success" />
      </Col>
    </Row>
    <br></br>
    <Row >
        <Col span={12} offset={6}>
           <Statistic title="Números de usuarios registrados" value={1} />
           <Statistic title="Números de links guardados." value={100} />
        </Col>
    </Row>
    

    <br></br>
    <Row >
        <Col span={12} offset={6}>
            <Timeline.Item>Creada la aplicación 202-08-20</Timeline.Item>
            <Timeline.Item>Publicada 202-08-21</Timeline.Item>
        </Col>
    </Row>

    </HomeLayout>
  )
}
