import { useState } from 'react';

const Tooltip = ({ text, children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipId = `tooltip-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div
      className={`group relative inline-block ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
      tabIndex={0}
    >
      {/* Trigger element with tooltip reference */}
      <div aria-describedby={isVisible ? tooltipId : undefined}>
        {children}
      </div>

      {/* Tooltip bubble */}
      {isVisible && (
        <div
          id={tooltipId}
          role="tooltip"
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800/95 border border-gray-700/50 text-gray-200 text-xs rounded-lg shadow-xl whitespace-nowrap pointer-events-none z-50 backdrop-blur-sm transition-opacity duration-300 opacity-100"
        >
          {text}
          {/* Arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800/95"></div>
        </div>
      )}

      {/* Invisible trigger element for keyboard accessibility */}
      <div className="absolute inset-0 opacity-0" role="presentation" />
    </div>
  );
};

export default Tooltip;
