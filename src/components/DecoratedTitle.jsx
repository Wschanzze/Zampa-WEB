import React from 'react';

const DecoratedTitle = ({ children, className = '', tag: Tag = 'h2' }) => {
  return (
    <Tag className={`decorated-title ${className}`}>
      <svg 
        className="title-ornament ornament-left"
        viewBox="0 0 60 20" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5" cy="10" r="1.5" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M 14 4 C 18 8, 20 9, 22 10 C 20 11, 18 12, 14 16" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M 10 6 C 14 8, 15 9, 17 10 C 15 11, 14 12, 10 14" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M 22 10 L 60 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
      <span className="title-text">{children}</span>
      <svg 
        className="title-ornament ornament-right"
        viewBox="0 0 60 20" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5" cy="10" r="1.5" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M 14 4 C 18 8, 20 9, 22 10 C 20 11, 18 12, 14 16" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M 10 6 C 14 8, 15 9, 17 10 C 15 11, 14 12, 10 14" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path d="M 22 10 L 60 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    </Tag>
  );
};

export default DecoratedTitle;
