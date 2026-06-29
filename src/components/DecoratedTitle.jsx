import React from 'react';

const DecoratedTitle = ({ children, className = '', tag: Tag = 'h2' }) => {
  return (
    <Tag className={`decorated-title ${className}`}>
      <svg 
        className="title-ornament ornament-left"
        viewBox="0 0 50 20" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 8 10 C 6 8, 2 8, 2 10 C 2 12, 6 12, 8 10 Z" fill="currentColor" />
        <path d="M 8 10 H 45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 15 10 C 20 4, 34 3, 40 9 C 41 10, 39 12, 37 11 C 33 9, 23 10, 15 10 Z" fill="currentColor" />
        <path d="M 15 10 C 20 16, 34 17, 40 11 C 41 10, 39 8, 37 9 C 33 11, 23 10, 15 10 Z" fill="currentColor" />
      </svg>
      <span className="title-text">{children}</span>
      <svg 
        className="title-ornament ornament-right"
        viewBox="0 0 50 20" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 8 10 C 6 8, 2 8, 2 10 C 2 12, 6 12, 8 10 Z" fill="currentColor" />
        <path d="M 8 10 H 45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 15 10 C 20 4, 34 3, 40 9 C 41 10, 39 12, 37 11 C 33 9, 23 10, 15 10 Z" fill="currentColor" />
        <path d="M 15 10 C 20 16, 34 17, 40 11 C 41 10, 39 8, 37 9 C 33 11, 23 10, 15 10 Z" fill="currentColor" />
      </svg>
    </Tag>
  );
};

export default DecoratedTitle;
