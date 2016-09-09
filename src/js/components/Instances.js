import React from 'react';
import { connect } from 'react-redux';
import Instance from './Instance';

const instanceNumber = (i) => parseInt(i.key.replace(/[A-Z]/g, ''), 10);

const sortFn = (a, b) => {
  // try by environment
  if (a.environment === 'production' && b.environment === 'sandbox') {
    return -1;
  }
  if (a.environment === 'sandbox' && b.environment === 'production') {
    return 1;
  }

  // try by location
  if (a.location < b.location) {
    return -1;
  }
  if (a.location > b.location) {
    return 1;
  }

  // try by instance number
  const numA = instanceNumber(a);
  const numB = instanceNumber(b);
  if (numA < numB) {
    return -1;
  }
  if (numA > numB) {
    return 1;
  }

  return 0;
};

const mapToComponent = (instances) => (
  instances
    .sort(sortFn)
    .map(i => <Instance status={i} key={i.key} />)
);

const Instances = (props) => {
  return (
    <div>
      {mapToComponent(props.instanceStatus)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  instanceStatus: state.instanceStatus,
});

export default connect(mapStateToProps)(Instances);
