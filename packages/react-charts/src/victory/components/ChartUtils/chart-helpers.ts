// Misc util functions

interface ChartClassNameInterface {
  className?: string;
}

/**
 * Copied from exenv
 *
 * @private Not intended as public API and subject to change
 */
export const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Returns the class name that will be applied to the outermost div rendered by the chart's container
 *
 * @private Not intended as public API and subject to change
 */
export const getClassName = ({ className }: ChartClassNameInterface) => {
  let cleanClassName;

  // Workaround for VictoryContainer class name
  if (className) {
    cleanClassName = className
      .replace(/VictoryContainer/g, '')
      .replace(/pf-v6-c-chart/g, '')
      .replace(/pf-c-chart/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
  return cleanClassName && cleanClassName.length ? `pf-v6-c-chart ${cleanClassName}` : 'pf-v6-c-chart';
};
