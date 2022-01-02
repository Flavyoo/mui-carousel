import * as React from 'react';

import { LegendControlProps } from './LegendControls.props';

export const LegendControls: React.FC<LegendControlProps> = ({
  numberOfControls,
}) => {
  return (
    <ul>
      {[...Array(numberOfControls)].map((_, i) => (
        <li key={i}>{`Control ${i}`}</li>
      ))}
    </ul>
  );
};
