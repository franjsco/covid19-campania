import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import getDataFromRepository from '../api/DataFromRepository';

import Card from '../components/Card';
import Infobox from '../components/Infobox';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const data = await getDataFromRepository();
    this.setState(data);
  }


  render() {
    const { state } = this;

    const rowStyle = {
      marginTop: '20px',
    };

    return (
      <Container>
        <Row className="text-center">
          <Col>
            <Infobox dataAggiornamento={state.data} />
          </Col>
        </Row>

        <Row style={rowStyle}>
          <Col xs={12} sm={4}>
            <Card
              bgColor="warning"
              title="Totale casi"
              value={state.totale_casi}
            />
          </Col>

          <Col xs={12} sm={4}>
            <Card
              bgColor="danger"
              title="Deceduti"
              value={state.deceduti}
            />
          </Col>

          <Col xs={12} sm={4}>
            <Card
              bgColor="success"
              title="Guariti"
              value={state.dimessi_guariti}
            />
          </Col>
        </Row>

        <Row style={rowStyle}>
          <Col xs={12} sm={4}>
            <Card
              bgColor="info"
              title="Attualmente positivi"
              value={state.totale_positivi}
            />
          </Col>

          <Col xs={12} sm={4}>
            <Card
              bgColor="info"
              title="Nuovi positivi"
              value={state.nuovi_positivi}
            />
          </Col>

          <Col xs={12} sm={4}>
            <Card
              bgColor="info"
              title="Tamponi"
              value={state.tamponi}
            />
          </Col>
        </Row>

        <Row style={rowStyle}>
          <Col xs={12} sm={4}>
            <Card
              textColor="dark"
              title="Totale ospedalizzati"
              value={state.totale_ospedalizzati}
            />
          </Col>

          <Col xs={12} sm={4}>
            <Card
              textColor="dark"
              title="Terapia intensiva"
              value={state.terapia_intensiva}
            />
          </Col>

          <Col xs={12} sm={4}>
            <Card
              textColor="dark"
              title="Isolamento domiciliare"
              value={state.isolamento_domiciliare}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
