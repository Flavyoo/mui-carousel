import * as React from 'react';

import { LegendControlProps } from './LegendControls.props';
import { styled } from '@mui/system';

const ControlUL = styled('ul')({
  position: 'absolute',
  textAlign: 'center',
  width: '100%',
  zIndex: 1,
});

const ControlLI = styled('li')({
  display: 'inline-block',
  cursor: 'pointer',
  margin: '0 0.5rem',
  borderRadius: '50%',
  transition: 'opacity 0.25s ease-in',
  opacity: 0.3,
  boxShadow: '1px 1px 2px rgb(0 0 0/90%)',
  width: 10,
  height: 10,
});

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
