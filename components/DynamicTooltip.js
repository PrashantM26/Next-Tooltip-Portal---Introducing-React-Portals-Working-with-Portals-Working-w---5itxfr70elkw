import React, { useState, useEffect } from 'react';
import TooltipPortal from './TooltipPortal';

function DynamicTooltip() {


 

  return (
    <TooltipPortal>
      <div style={{ position: 'absolute', top: '50px', left: '50px', backgroundColor: 'gray', padding: '10px', borderRadius: '5px' }}>
       This is a tooltip
      </div>
    </TooltipPortal>
  );
}

export default DynamicTooltip;
