import * as React from 'react';

import { LegendControlProps } from './LegendControls.props';
import { styled } from '@mui/system';

const ControlUL = styled('ul')({
  position: 'absolute',
  textAlign: 'center',
  width: '100%',
  zIndex: 1,
  bottom: 0,
});

const ControlLI = styled('li')({
  display: 'inline-block',
  cursor: 'pointer',
  margin: '0 0.5rem',
  borderRadius: '50%',
  transition: 'opacity 0.25s ease-in',
  boxShadow: '1px 1px 2px rgb(0 0 0/90%)',
  width: 15,
  height: 15,
});

export const LegendControls: React.FC<LegendControlProps> = ({
  onClick,
  numberOfControls,
}) => {
  const handleClick = React.useCallback(
    (index: number) => {
      return () => {
        onClick(index);
      };
    },
    [onClick]
  );

  return (
    <ControlUL>
      {[...Array(numberOfControls)].map((_, i) => (
        <ControlLI key={i} onClick={handleClick(i)} />
      ))}
    </ControlUL>
  );
};
