import logo from './logo.svg';
import './App.css';
import React from 'react';
import FeatureToggle from './FeatureToggle';

function App() {
  return (
    <div>
      <FeatureToggle isEnabled={true} featureName={"Feature A"}></FeatureToggle>
      <FeatureToggle isEnabled={true} featureName={"Feature B"}></FeatureToggle>
      <FeatureToggle isEnabled={false} featureName={"Feature C"}></FeatureToggle>

    </div>
  );
}

export default App;
