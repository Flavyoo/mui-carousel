import * as React from 'react';

import { CarouselProps } from './Carousel.props';
import { LegendControls } from '../LegendControls';
import { styled } from '@mui/system';

const Root = styled('div')({
  height: 'auto',
  width: '100%',
});

export const Carousel: React.FC<CarouselProps> = ({ id, children }) => {
  const totalChildren = React.Children.count(children);

  return (
    <Root id={id}>
      {React.Children.map(children, (item, index) => (
        <ul key={index}>{item}</ul>
      ))}
      <LegendControls numberOfControls={totalChildren} />
    </Root>
  );
};
