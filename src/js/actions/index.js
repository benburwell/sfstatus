import fetch from 'isomorphic-fetch';

export const FETCH_INSTANCE_STATUS = 'FETCH_INSTANCE_STATUS';
export const fetchInstanceStatus = () => {
  return (dispatch) => {
    return fetch('https://beta-api.status.salesforce.com/v1/instances/status')
      .then(response => response.json())
      .then(json => {
        dispatch(receiveInstanceStatus(json));
      });
  };
};

export const RECEIVE_INSTANCE_STATUS = 'RECEIVE_INSTANCE_STATUS';
export const receiveInstanceStatus = (instances) => {
  return {
    type: RECEIVE_INSTANCE_STATUS,
    instances,
  };
};
