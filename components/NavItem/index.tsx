import { navItemsHeader as navItems } from '@/constants/navItems';
import React from 'react';
import classes from './navItem.module.scss';
import analytics, {
  AVAILABLE_EVENT_TYPES,
  eventTypes,
  ActionTypes,
} from '@/utils/analytics';

type NavItemKeyType = keyof typeof navItems;

export default function TopNavigator() {
  const [toggle, setToggle] = React.useState(false);
  const ulItems = Object.keys(navItems).map((element, index) => {
    let displayElement: number | string = index + 1;
    if (displayElement < 10) {
      displayElement = '0' + displayElement;
    }
    if (toggle)
      return (
        <li
          key={'topNavElement__li_ul' + index}
          className={classes['navigation__item']}
          onClick={() => {
            setToggle(false);
            analytics.logUserEvents(ActionTypes.closeNavigator);
          }}>
          <a
            href={'#' + navItems[element as NavItemKeyType].href}
            className={classes['navigation__link']}>
            <span>{displayElement}</span>
            {navItems[element as NavItemKeyType].display}
          </a>
        </li>
      );
    else return null;
  });
  return (
    <div className={classes['navigation']}>
      <input
        type='checkbox'
        className={classes['navigation__checkbox']}
        checked={toggle}
        onChange={() => null}
      />

      <label
        onClick={() => {
          setToggle((previous) => !previous);
          const actionType = toggle
            ? ActionTypes.openNavigator
            : ActionTypes.closeNavigator;
          analytics.logUserEvents(actionType);
        }}
        className={classes['navigation__button']}>
        <span className={classes['navigation__icon']}>&nbsp;</span>
      </label>

      <div className={classes['navigation__background']}>&nbsp;</div>

      <nav className={classes['navigation__nav']}>
        <ul className={classes['navigation__list']}>{ulItems}</ul>
      </nav>
    </div>
  );
}
