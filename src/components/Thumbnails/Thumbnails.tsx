import * as React from 'react';
import { styled } from '@mui/system';
import { ThumbnailProps } from './Thumbnails.props';

const ImageList = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
});

const ImageListItem = styled('div')({
  marginRight: '0.5rem',
  cursor: 'pointer',
  'img ': {
    width: 70,
  },
});

export const Thumbnails: React.FC<ThumbnailProps> = ({ images, onClick }) => {
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
    <div tabIndex={0}>
      <ImageList>
        {images.map((imageData, _) => {
          const { foundImage, index } = imageData;
          return (
            <ImageListItem
              onClick={handleClick(index)}
              onKeyDown={handleKeyDown(index)}
              aria-label={`Thumbnail for slide item ${index}`}
              key={index}
              role="button"
              tabIndex={0}
            >
              {foundImage as React.ReactHTMLElement<HTMLImageElement>}
            </ImageListItem>
          );
        })}
      </ImageList>
    </div>
  );
};
