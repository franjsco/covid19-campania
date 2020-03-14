import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Layout from './components/Layout';
import Dashboard from './containers/Dashboard';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Layout>
      <Row>
        <Col>
          <Dashboard />
        </Col>
      </Row>
      <Row
        style={{ marginTop: '10px' }}
        className="text-center"
      >
        <Col>
          <Footer />
        </Col>
      </Row>
    </Layout>
  );
}

export default App;
