import React from 'react';

const RelativeTime = (props) => {
  return <span>{props.moment.fromNow()}</span>;
};

export default RelativeTime;
