import * as React from 'react';

import { CarouselProps, SlideProps } from './Carousel.props';
import { LegendControls } from '../LegendControls';
import { styled } from '@mui/system';

const Root = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  margin: 0,
  padding: 0,
  height: 'auto',
  width: '100%',
});

const SliderContainer = styled('div')({
  overflow: 'hidden',
  margin: 'auto',
  width: '100%',
  transition: 'height .15s ease-in',
});

const AnimatedSlider = styled('ul')({
  position: 'relative',
  listStyle: 'none',
  width: '100%',
  padding: 0,
  margin: 0,
  transition: 'all .35s ease-in-out',
  transform: 'translate3d(-1300%, 0px, 0px)',
  transitionDuration: '350ms',
});

const Slide = styled('li', {
  shouldForwardProp: prop => prop !== 'selected' && prop !== 'previous',
})<SlideProps>(({ selected, previous }) => ({
  minWidth: '100%',
  margin: 0,
  position: 'relative',
  textAlign: 'center',
  flexDirection: 'column',
  flexFlow: 'column',
  ...(selected && {}),
  ...(previous && {}),
}));

export const Carousel: React.FC<CarouselProps> = ({
  id,
  selectedChild,
  children,
}) => {
  const totalChildren = React.Children.count(children);
  const [childInView, setSelectedChild] = React.useState<number>(0);

  React.useEffect(() => {
    setSelectedChild(selectedChild ?? 0);
  }, [setSelectedChild]);

  return (
    <Root id={id}>
      <LegendControls
        numberOfControls={totalChildren}
        onClick={i => console.log('index: ', i)}
      />
      <SliderContainer>
        {React.Children.map(children, (child, index) => (
          <AnimatedSlider key={index}>
            <Slide selected={index === childInView} previous={false}>
              {child}
            </Slide>
          </AnimatedSlider>
        ))}
      </SliderContainer>
    </Root>
  );
};
