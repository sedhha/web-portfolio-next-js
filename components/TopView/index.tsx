import React from 'react'; //useState
import classes from './components.module.scss';

import { Link } from 'react-scroll';
import { topHeaders as topHeader, sectionIds } from '@/constants/index';
import analytics, { ActionTypes } from '@/utils/analytics';

export default function TopHeader() {
  return (
    <header
      id={sectionIds.topHeader_sectionId}
      className={classes.heading}
      style={{
        backgroundImage: `linear-gradient(
			to right bottom,
			${topHeader.headerGrade1 || 'rgba(126,213,111,.8)'},
			${topHeader.headerGrade2 || 'rgba(40,180,133,.8)'}),
			url('${topHeader.headImageUrl}')`,
      }}>
      <div className={classes.logobox}>
        <picture>
          <source
            srcSet={`${topHeader.displayUri} 400w,
              ${topHeader.displayUri} 800w,
              ${topHeader.displayUri} 1200w`}
            sizes='(min-width: 1280px) 1200px,
             (min-width: 768px) 400px,
             100vw'
          />
          <img
            className={classes.logo}
            src={topHeader.displayUri}
            alt={topHeader.logoAltDescription || 'logo'}
          />
        </picture>
      </div>

      <div className={classes.textBox}>
        <h1 className={classes.headingPrimary}>
          <span className={classes.headingPrimaryMain}>
            {topHeader.mainHeading || 'Shivam Sahil'}
          </span>
          <span
            className={classes.headingPrimarySub}
            style={{ fontStyle: 'italic', textTransform: 'none' }}>
            {topHeader.mainSubHeading || 'Artist by Birth, Engineer by Choice'}
          </span>
        </h1>

        <Link
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          to={topHeader.gotoButtonSectionName}
          className={[classes.btn, classes.btnWhite, classes.btnAnimated].join(
            ' '
          )}
          onClick={() => {
            analytics.logUserEvents(ActionTypes.gotoTop);
          }}>
          {topHeader.buttonText || 'Know More'}
        </Link>
      </div>
    </header>
  );
}
