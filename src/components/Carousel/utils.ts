import * as React from 'react';

export const createTranslateStyle = (
  translatePercentage: number,
  metric: 'px' | '%' = '%',
  translateType: string = 'translate3d'
): React.CSSProperties => {
  const positionPercent = `${translatePercentage}${metric}`;
  return {
    transform: `${translateType}(${[positionPercent, 0, 0].join(',')})`,
  };
};

export const getTranslatePercentage = (index: number): number => {
  if (index === 0) {
    return 0;
  }

  return -index * 100;
};
