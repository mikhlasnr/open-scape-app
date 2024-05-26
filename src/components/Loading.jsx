import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className="loading">
      {/* @TODO: use react-redux-loading-bar to show loading bar */}
      <LoadingBar style={{ background: 'red', height: 5 }} />
    </div>
  );
}

export default Loading;
