export interface LegendControlProps {
  /**
   * The number of controls to show
   */
  numberOfControls: number;
  /**
   * Click handler for the LegendControl
   *
   * @param index Index of the control that was clicked
   */
  onClick(index: number): void;
}
