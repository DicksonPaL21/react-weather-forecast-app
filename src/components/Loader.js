import React from 'react';

const Loader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
