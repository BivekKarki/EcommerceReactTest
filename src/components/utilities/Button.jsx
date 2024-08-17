import React from 'react';

const Button = ({ children, onClick, className, type = 'button'}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-sm font-medium bg-[#204080] text-white transition-colors duration-300 ${className}  `}
    >
      {children}
    </button>
  );
};

export default Button;
