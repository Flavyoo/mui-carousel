import * as React from 'react';

import { LegendControlProps, ControlItemProps } from './LegendControls.props';
import { styled } from '@mui/system';

const ControlUL = styled('ul')({
  padding: 0,
  margin: '10px 0',
  textAlign: 'center',
  width: '100%',
});

const ControlLI = styled('li', {
  shouldForwardProp: prop => prop !== 'selected',
})<ControlItemProps>(({ selected }) => ({
  display: 'inline-block',
  cursor: 'pointer',
  margin: '0 0.5rem',
  borderRadius: '50%',
  transition: 'opacity 0.25s ease-in',
  boxShadow: '1px 1px 2px rgb(0 0 0/90%)',
  width: 10,
  height: 10,
  ...(selected && {
    border: '1px solid black',
  }),
}));

export const LegendControls: React.FC<LegendControlProps> = ({
  onClick,
  numberOfControls,
  selectedIndex,
}) => {
  const handleClick = React.useCallback(
    (index: number) => {
      return () => {
        onClick(index);
      };
    },
    [onClick]
  );

  const handleKeyDown = React.useCallback(
    (index: number) => {
      return (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
          onClick(index);
        }
      };
    },
    [onClick]
  );

  return (
    <ControlUL tabIndex={0}>
      {[...Array(numberOfControls)].map((_, i) => (
        <ControlLI
          selected={i === selectedIndex}
          key={i}
          onClick={handleClick(i)}
          onKeyDown={handleKeyDown(i)}
          tabIndex={0}
        />
      ))}
    </ControlUL>
  );
};
