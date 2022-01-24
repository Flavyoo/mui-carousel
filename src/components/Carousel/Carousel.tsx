import * as React from 'react';

import { styled } from '@mui/system';
import { CarouselProps, SlideProps } from './Carousel.props';
import { LegendControls } from '../LegendControls';
import { Thumbnails, ThumbnailImageData } from '../Thumbnails';
import { getTranslatePercentage, createTranslateStyle } from './utils';

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

const AnimatedSlider = styled('ul', { shouldForwardProp: () => true })({
  position: 'relative',
  listStyle: 'none',
  width: '100%',
  padding: 0,
  margin: 0,
  transition: 'all .35s ease-in-out',
  transitionDuration: '350ms',
  display: 'flex',
});

const Slide = styled('li', {
  shouldForwardProp: prop => prop !== 'selected' && prop !== 'previous',
})<SlideProps>(({ selected, previous }) => ({
  minWidth: '100%',
  margin: 0,
  position: 'relative',
  textAlign: 'center',
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
  const [currentlySelectedChild, setSelectedChild] = React.useState<number>(0);

  React.useEffect(() => {
    setSelectedChild(selectedChild ?? 0);
  }, [setSelectedChild]);

  const handleSelectChild = React.useCallback(
    (childIndex: number) => {
      setSelectedChild(childIndex);
    },
    [setSelectedChild]
  );

  const thumbnailImages = React.useMemo(
    () =>
      React.Children.map<ThumbnailImageData | undefined, React.ReactChild>(
        children as React.ReactChild,
        (child, index) => {
          if ((child as React.ReactElement).type !== 'img') {
            const grandChildren = React.Children.toArray(
              (child as React.ReactElement).props.children as React.ReactElement
            );
            const foundImage = grandChildren.find(
              grandChild => (grandChild as React.ReactElement).type === 'img'
            ) as React.ReactChild;

            if (foundImage) {
              return {
                index,
                foundImage,
              };
            }
          } else if ((child as React.ReactElement).type === 'img') {
            return {
              index,
              foundImage: child,
            };
          }
        }
      ),
    [children]
  );

  const currentTranslatePercentage = getTranslatePercentage(
    currentlySelectedChild
  );

  return (
    <Root id={id}>
      <SliderContainer>
        <AnimatedSlider
          style={createTranslateStyle(currentTranslatePercentage)}
        >
          {React.Children.map(children, (item, index) => (
            <Slide
              key={index}
              selected={index === currentlySelectedChild}
              previous={false}
            >
              {item}
            </Slide>
          ))}
        </AnimatedSlider>
      </SliderContainer>
      <LegendControls
        numberOfControls={totalChildren}
        onClick={handleSelectChild}
      />
      {!children ||
      totalChildren === 0 ||
      (thumbnailImages && thumbnailImages.length === 0) ? undefined : (
        <Thumbnails images={thumbnailImages} onClick={handleSelectChild} />
      )}
    </Root>
  );
};
