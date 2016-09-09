import React from 'react';
import Incident from './Incident';

const Instance = (props) => (
  <div className="instance">
    <h2>
      <a name={props.status.key} href={'#' + props.status.key}>
        {props.status.key}
      </a>
      &nbsp;
      <span className="text-muted">
        {props.status.releaseVersion}
      </span>
    </h2>
    {props.status.Incidents.map(i =>
      <Incident key={i.id} incident={i} />
    )}
  </div>
);

export default Instance;
