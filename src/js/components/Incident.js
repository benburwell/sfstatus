import React from 'react';
import RelativeTime from './RelativeTime';
import moment from 'moment';
import Timestamp from './Timestamp';

const IncidentImpact = (props) => (
  <div className="incident-impact">
    <span className={'impact-severity-' + props.impact.severity}>
      {props.impact.type}
    </span>
    <span className="text-muted"> from </span>
    <Timestamp moment={moment(props.impact.startTime)} />
    <span className="text-muted"> to </span>
    <Timestamp moment={moment(props.impact.endTime)} />
  </div>
);

const additionalInfo = (incident) => {
  if (incident.additionalInformation) {
    return <blockquote>{incident.additionalInformation}</blockquote>;
  }
  return null;
}

const Incident = (props) => (
  <div className="incident">
    <div className="incident-body">
      <div>
        {props.incident.message.rootCause || 'unknown root cause'}
        <span className="text-muted"> ⇒ </span>
        {props.incident.message.actionPlan || 'no action plan'}
      </div>
      {additionalInfo(props.incident)}
      {props.incident.IncidentImpacts.map(impact => <IncidentImpact impact={impact} key={impact.id} />)}
    </div>
    <div className="incident-footer">
      <div className="text-muted">
        <em>
          Updated <RelativeTime moment={moment(props.incident.updatedAt)} />.
          Affects <abbr title={props.incident.instanceKeys.join(', ')}>{props.incident.instanceKeys.length} {props.incident.instanceKeys.length === 1 ? 'instance' : 'instances'}</abbr>.
        </em>
      </div>
    </div>
  </div>
);

export default Incident;
