import * as React from 'react';

import { CarouselProps } from './Carousel.props';

export const Carousel: React.FC<CarouselProps> = ({ id, children }) => {
  return <div id={id}>{children}</div>;
};
