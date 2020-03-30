import React from 'react'
import styled from 'styled-components'
import { Row, Col, Container, Card as BSCard } from 'reactstrap'
import './App.css'
import Navbar from './components/Navbar'

const Content = styled('div')``
const StatusCard = styled(BSCard)`
  background-color: #f16c69;
  color: #fff;
  padding: 20px;
  margin: 0px 20px 0px 20px;
  & .card-title {
    font-size: 27px;
    margin-top: -10px;
    text-transform: uppercase;
    color: rgba(255, 190, 190, 0.3);
  }
`
const Accent = styled('div')`
  width: 100%;
  height: 150px;
  background: #000;
  margin-bottom: -30px;
  padding: 40px;
  & .title {
    color: #fff;
    margin: -20px 0px 0px 0px;
    font-weight: bold;
  }
  & .text {
    color: #fff;
  }
`
const Card = styled(BSCard)`
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  padding: 30px;
`
const Layout = styled(Container)`
  margin-top: 20px;
`

function App() {
  return (
    <>
      <Navbar>
        <div>Haloo</div>
      </Navbar>
      <Content>
        <Accent>
          <div className="title">Dashboard</div>
          <div className="text">Welcome</div>
        </Accent>
        <Row>
          <Col md={3}>
            <StatusCard>
              <div className="card-title">Reservation</div>
              <div>1,000</div>
            </StatusCard>
          </Col>
          <Col md={3}>
            <StatusCard>
              <div className="card-title">Reservation</div>
              <div>1,000</div>
            </StatusCard>
          </Col>
          <Col md={3}>
            <StatusCard>
              <div className="card-title">Reservation</div>
              <div>1,000</div>
            </StatusCard>
          </Col>
          <Col md={3}>
            <StatusCard>
              <div className="card-title">Reservation</div>
              <div>1,000</div>
            </StatusCard>
          </Col>
        </Row>
        <Layout>
          <Row>
            <Col md={8}>
              <Card>SSS</Card>
            </Col>
            <Col md={4}>
              <Card>SSS</Card>
            </Col>
          </Row>
        </Layout>
        <Layout>
          <Row>
            <Col md={4}>
              <Card>SSS</Card>
            </Col>
            <Col md={4}>
              <Card>SSS</Card>
            </Col>
            <Col md={4}>
              <Card>SSS</Card>
            </Col>
          </Row>
        </Layout>
        <Layout>
          <Row>
            <Col md={6}>
              <Card>SSS</Card>
            </Col>
            <Col md={6}>
              <Card>SSS</Card>
            </Col>
          </Row>
        </Layout>
      </Content>
    </>
  )
}

export default App
