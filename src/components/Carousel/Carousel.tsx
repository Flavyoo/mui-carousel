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
        <AnimatedSlider>
          {React.Children.map(children, (item, index) => (
            <Slide
              key={index}
              selected={index === childInView}
              previous={false}
            >
              {item}
            </Slide>
          ))}
        </AnimatedSlider>
      </SliderContainer>
    </Root>
  );
};
