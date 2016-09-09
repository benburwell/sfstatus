import React from 'react';
import Instances from './Instances';

const App = () => (
  <div>
    <h1>Salesforce Status</h1>
    <p className="text-muted">
      All times shown as local.
    </p>
    <Instances />
  </div>
);

export default App;
