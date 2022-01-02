import * as React from 'react';

import { LegendControlProps } from './LegendControls.props';
import { styled } from '@mui/material';

const ControlUL = styled('ul')`
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 1;
`;

const ControlLI = styled('li')`
  display: inline-bloack;
  cursor: pointer;
  margin: 0 0.5rem;
  border-radius: 50%;
  transition: opacity 0.25s ease-in;
  opacity: 0.3;
  box-shadow: 1px 1px 2px rgb(0 0 0/90%);
  width: 10px;
  height: 10px;
`;

export const LegendControls: React.FC<LegendControlProps> = ({
  numberOfControls,
}) => {
  return (
    <ControlUL>
      {[...Array(numberOfControls)].map((_, i) => (
        <ControlLI key={i} />
      ))}
    </ControlUL>
  );
};
