import React from 'react';
import classes from './Footer.module.scss';
import { BsTriangle } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { getIconByName } from '@/components/utils';
import { Link } from 'react-scroll';
import { sectionIds } from '@/constants/index';
import { footerData } from '@/constants/index';

const Footer = () => {
  const { networks, copyrightDetails } = footerData;
  return (
    <footer className={classes.Footer}>
      <IconContext.Provider
        //value={{ color: "blue", className: "global-class-name" }}
        value={{ className: classes.IconStyling }}>
        <div className={classes.GotoTop}>
          <Link
            to={sectionIds.topHeader_sectionId}
            smooth
            duration={1000}
            onClick={() => {
              // TODO : updateActions and pushData to Backend
              //   dispatch(updateActions('footerActions__knowMoretoTop__'));
              //   dispatch(pushDataToBackend());
            }}>
            <BsTriangle />
          </Link>
        </div>
      </IconContext.Provider>
      <p className={classes.SocialHandles}>
        {networks.map((element) => (
          <a
            href={element.url}
            key={element.id}
            target={'_blank'}
            rel='noreferrer'
            onClick={() => {
              // TODO : updateActions and pushData to Backend
              //   dispatch(
              //     updateActions(
              //       'footerActions__footer_social__' + element.identifierName
              //     )
              //   );
              //   dispatch(pushDataToBackend());
            }}>
            {getIconByName(element.name, {
              className: classes.networkIcon,
            })}
          </a>
        ))}
      </p>
      <hr className={classes.RulerLine} />
      <p className={classes.CopyRightContent}>
        &copy; {copyrightDetails.name + ' ' + new Date().getFullYear() + '    '}
        | A big thanks to all the{' '}
        <span>
          <a
            className={classes.MentorsTag}
            href='https://github.com/sedhha/shivam-sahil-portfolio#credits-section'
            target='_blank'
            rel='noreferrer'>
            mentors
          </a>
        </span>{' '}
        who helped me build this!
      </p>
    </footer>
  );
};

export default Footer;
