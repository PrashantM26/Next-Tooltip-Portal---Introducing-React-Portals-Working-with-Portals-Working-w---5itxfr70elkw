import ReactDOM from 'react-dom';
import React from 'react';

const portalRoot = typeof document !== 'undefined' ? document.getElementById('tooltip-portal') : null;

function TooltipPortal({ children }) {
  if (!portalRoot) {
    return null;
  }

  return ReactDOM.createPortal(children, portalRoot);
}

export default TooltipPortal;
