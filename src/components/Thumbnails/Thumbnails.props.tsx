import * as React from 'react';

export interface ThumbnailImageData {
  index: number;
  foundImage: React.ReactChild;
}

export interface ImageListItemProps {
  selected: boolean;
}

export interface ThumbnailProps {
  /**
   * React child image elements to render thumbnails for
   */
  images: ThumbnailImageData[];
  /**
   * Click handler for when a thumbnail is clicked
   *
   * @param index Index of the thumbnail that was clicked
   */
  onClick(index: number): void;
  /**
   * Index of the current selected carousel child
   */
  selectedIndex: number;
}
