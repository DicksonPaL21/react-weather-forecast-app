import React from 'react';

const Card = ({ className = '', bodyClassName = '', children, ...props }) => {
  return (
    <div className={`card ${className}`} {...props}>
      <div className={`card-body ${bodyClassName}`}>{children}</div>
    </div>
  );
};

export default Card;
