import React from 'react';
import { Card as CardBootstrap, CardDeck } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Card = (props) => {
  const {
    title,
    bgColor,
    textColor,
    value,
  } = props;

  return (
    <CardDeck>
      <CardBootstrap
        bg={bgColor}
        text={textColor}
        className="text-center"
      >
        <CardBootstrap.Header as="h6">
          {title}
        </CardBootstrap.Header>
        <CardBootstrap.Body>
          <CardBootstrap.Text as="h1">
            {value}
          </CardBootstrap.Text>
        </CardBootstrap.Body>
      </CardBootstrap>
    </CardDeck>
  );
};

Card.defaultProps = {
  bgColor: 'light',
  textColor: 'white',
  value: '-',
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Card;
