import React from 'react';

const DecoratedTitle = ({ children, className = '', tag: Tag = 'h2' }) => {
  return (
    <Tag className={`decorated-title ${className}`}>
      <span className="title-text">{children}</span>
    </Tag>
  );
};

export default DecoratedTitle;
