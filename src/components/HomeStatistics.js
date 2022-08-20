import React from 'react'
import { Col, Row, Alert, Statistic, Timeline, Image } from 'antd';

export default function HomeStatistics() {
  return (
    <Row >
        <Col span={12} offset={6}>
           <Statistic title="Números de usuarios registrados" value={1} />
           <Statistic title="Números de links guardados." value={100} />
        </Col>
    </Row>
  )
}
