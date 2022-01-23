export interface SlideProps {
  /**
   * Whether this is the currently selected slide
   */
  selected: boolean;
  /**
   * Wehther this is the previous slide
   */
  previous: boolean;
}

export interface CarouselProps {
  /**
   * Id of the root element of the Carousel
   */
  id?: string;
  /**
   * Index of the selected child. This will be the element that has the selected element styles applied
   */
  selectedChild?: number;
}
