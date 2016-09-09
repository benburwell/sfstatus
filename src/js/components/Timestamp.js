import React from 'react';

const Timestamp = (props) => (
  <span>{props.moment.format('YYYY-MM-DD [at] HH:mm:ss')}</span>
);

export default Timestamp;
