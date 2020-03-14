import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import Card from '../components/Card';
import Infobox from '../components/Infobox';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios
      .get('https://openpuglia.org/api/?q=getdatapccovid-19&reg=campania')
      .then((response) => this.setState(response.data[0]));
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
              value={state['totale casi']}
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
              value={state['dimessi guariti']}
            />
          </Col>
        </Row>

        <Row style={rowStyle}>
          <Col xs={12} sm={4}>
            <Card
              bgColor="info"
              title="Attualmente positivi"
              value={state['totale attualmente positivi']}
            />
          </Col>

          <Col xs={12} sm={4}>
            <Card
              bgColor="info"
              title="Nuovi attualmente positivi"
              value={state['nuovi attualmente positivi']}
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
              value={state['totale ospedalizzati']}
            />
          </Col>

          <Col xs={12} sm={4}>
            <Card
              textColor="dark"
              title="Terapia intensiva"
              value={state['terapia intensiva']}
            />
          </Col>

          <Col xs={12} sm={4}>
            <Card
              textColor="dark"
              title="Isolamento domiciliare"
              value={state['isolamento domiciliare']}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
