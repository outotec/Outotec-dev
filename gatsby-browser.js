import { scroller } from 'react-scroll';

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import { globalHistory } from '@reach/router';

globalHistory.listen(({ location }) => {
  if (location.href.indexOf('#') > 0) {
    const splitHref = location.href.split('#');
    const hashVal = splitHref[splitHref.length - 1];
    setTimeout(() => scroller.scrollTo(hashVal, { smooth: true }), 0);
  }
});

export const shouldUpdateScroll = ({
  prevRouterProps,
  routerProps,
  pathname,
  getSavedScrollPosition,
}) => {
  // true = default behaviour: reset scroll on route change
  return true;
};
