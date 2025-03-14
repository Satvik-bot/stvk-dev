import React from 'react';
import PropTypes from 'prop-types';
import { TRANSITIONS } from '../../constants/theme';

const Button = ({ 
  children, 
  variant = 'primary',
  className = '',
  href,
  isLoading = false,
  disabled = false,
  onClick,
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium relative';
  const variants = {
    primary: 'bg-purple-900/20 text-purple-200 border border-purple-800/20 hover:bg-purple-900/30 hover:text-purple-400 hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:transform-none',
    link: 'text-purple-200/70 hover:text-purple-400 disabled:opacity-50'
  };

  const Component = href ? 'a' : 'button';
  const isDisabled = isLoading || disabled;
  
  const handleClick = (event) => {
    if (isDisabled) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={{ transition: TRANSITIONS.default }}
      href={href}
      onClick={handleClick}
      disabled={isDisabled}
      type={Component === 'button' ? type : undefined}
      aria-disabled={isDisabled}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="opacity-0">{children}</span>
          <span className="absolute inset-0 flex items-center justify-center">
            <svg 
              className="animate-spin h-5 w-5" 
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        </>
      ) : children}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'link']),
  className: PropTypes.string,
  href: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button; 