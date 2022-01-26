export interface ControlItemProps {
  selected: boolean;
}
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
  /**
   * Index of the current selected carousel child
   */
  selectedIndex: number;
}
