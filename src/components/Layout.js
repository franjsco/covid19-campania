import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Headbar from './Headbar';

const Layout = (props) => {
  const sytle = {
    marginTop: '10px',
  };

  const { children } = props;
  return (
    <div>
      <Headbar />
      <Container style={sytle}>
        { children }
      </Container>
    </div>

  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
