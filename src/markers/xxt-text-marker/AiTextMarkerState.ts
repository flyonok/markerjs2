import { RectangularBoxMarkerBaseState } from '../RectangularBoxMarkerBaseState';

export interface AITextMarkerState extends RectangularBoxMarkerBaseState {
  color: string;
  fontFamily: string;
  padding: number;
  text: string;
  /**
   * Rectangle border stroke (line) color.
   */
  strokeColor: string;
  /**
   * Rectange border width.
   */
  strokeWidth: number;
  /**
   * Rectange border dash array.
   */
  strokeDasharray: string;
  /**
   * Rectangle opacity (alpha). 0 to 1.
   */
  opacity: number;
}