import * as React from 'react';

import { CarouselProps } from './Carousel.props';
import { styled } from '@mui/material/styles';

const Root = styled('div')`
  height: auto,
  width: 100%;
`;

const CarouselItem = styled('li')``;

export const Carousel: React.FC<CarouselProps> = ({ id, children }) => {
  return (
    <Root id={id}>
      {React.Children.map(children, item => (
        <CarouselItem>{item}</CarouselItem>
      ))}
    </Root>
  );
};
