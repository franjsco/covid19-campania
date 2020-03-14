import React from 'react';
import PropTypes from 'prop-types';

const Infobox = (props) => {
  const { dataAggiornamento } = props;

  return (
    <div>
      <span className="font-weight-bold">Ultimo aggiornamento: </span>
      { dataAggiornamento }
    </div>
  );
};

Infobox.defaultProps = {
  dataAggiornamento: 'n.d.',
};

Infobox.propTypes = {
  dataAggiornamento: PropTypes.string,
};

export default Infobox;
