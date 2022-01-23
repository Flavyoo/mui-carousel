import * as React from 'react';
import { styled } from '@mui/system';
import { ThumbnailProps } from './Thumbnails.props';

const ImageList = styled('div')({
  display: 'flex',
});

const ImageListItem = styled('div')`
  margin-right: 0.5rem;
  cursor: pointer;
  img {
    width: 70px;
    height: auto;
  }
`;

export const Thumbnails: React.FC<ThumbnailProps> = ({ images }) => {
  return (
    <div tabIndex={0}>
      <ImageList>
        {images.map((image, index) => (
          <ImageListItem
            onClick={() => console.log('thumbnail: ', index)}
            aria-label={`Thumbnail for slide item ${index}`}
            key={index}
            role="button"
            tabIndex={0}
          >
            {image as React.ReactHTMLElement<HTMLImageElement>}
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};
