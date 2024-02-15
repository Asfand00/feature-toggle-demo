import React from 'react';

function FeatureToggle({ isEnabled, featureName }) {
    return isEnabled ? (
        <div>{featureName}</div>
    ) : (
        <div>{`Feature: ${featureName} is disabled`}</div>
    )
}

export default FeatureToggle