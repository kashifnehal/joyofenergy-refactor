import React from 'react';

const ErrorFallback = ({ error }) => {
  return (
    <div role="alert" className="p3 bg-red white rounded">
      <h2 className="h3 mb2">Something went wrong:</h2>
      <pre className="overflow-auto">{error.message}</pre>
    </div>
  );
};



export default ErrorFallback;