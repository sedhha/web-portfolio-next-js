import { nanoid } from 'nanoid';
import SlidingContainer from '@/components/utils/sliding-container-fc';
import { getIcon, getMainHeading, iconsMap } from '@/components/utils';
import {
  ISocialHandle,
  IUserTestimonial,
  ITestimonialComponent,
} from '@/constants/testimonials';
const getUserTestimonials = (
  testimonialContent: IUserTestimonial[],
  classes: Record<string, string>,
  onTestimonialActionHandler: (identifier: string) => void
) => {
  const testimonials = testimonialContent.map((element) => {
    const socialMediaIcons = getSocialHandles(
      element.socialHandles,
      classes,
      onTestimonialActionHandler,
      element.name
    );
    const pbreaks = element.content.split('\n').map((pElement) => (
      <p key={nanoid()} className={classes['story__paras']}>
        {pElement}
      </p>
    ));
    return (
      <div className={classes.TestimonialRow} key={element.id}>
        <div className={classes.story}>
          <p className={classes.story_displayElement}>{element.name}</p>
          <picture>
            <source
              srcSet={`${element.displayUri} 400w,
              ${element.displayUri} 800w,
              ${element.displayUri} 1200w`}
              sizes='(min-width: 1280px) 1200px,
             (min-width: 768px) 400px,
             100vw'
            />
            <img
              src={element.displayUri}
              alt={'composiiton images'}
              className={classes.story_image}
            />
          </picture>
        </div>
        <p
          className={classes.ElementTitleParaHeading}
          style={element.headingStyle ?? {}}>
          {element.positionAtTimeOfReferal}
        </p>
        <p className={classes.ElementHeading}>{element.heading}</p>
        {pbreaks}
        {socialMediaIcons}
      </div>
    );
  });

  return testimonials;
};

const getSocialHandles = (
  socialDetails: ISocialHandle[],
  classes: Record<string, string>,
  onSocialClickHandler: (identifier: string) => void,
  socialPersonName: string
) => {
  socialDetails = socialDetails || [];
  const socials = socialDetails.map((element) => {
    const Icon = getIcon(
      iconsMap[element.icon.iconName],
      element.icon.iconProps
    );
    return (
      <a
        key={element.id}
        href={element.href}
        target='_blank'
        rel='noreferrer'
        onClick={() => onSocialClickHandler(socialPersonName)}>
        <div className={classes['social_icon']}>{Icon}</div>
      </a>
    );
  });
  return <div className={classes['rowElement']}>{socials}</div>;
};

type TestimonialProps = {
  testimonialComponent: ITestimonialComponent;
  classes: Record<string, string>;
  onTestimonialActionHandler: (identifier: string) => void;
};
const MapTestimonials = ({
  testimonialComponent,
  classes,
  onTestimonialActionHandler,
}: TestimonialProps) => {
  if (!testimonialComponent.showSection) return null;
  else {
    const sectionHeading = getMainHeading(
      testimonialComponent.heading,
      testimonialComponent.headingStyle,
      classes
    );
    const sectionContents = getUserTestimonials(
      testimonialComponent.userTestimonials,
      classes,
      onTestimonialActionHandler
    );
    return (
      <section
        key={testimonialComponent.id}
        id={testimonialComponent.id}
        className={classes['section-stories']}>
        {sectionHeading}
        <SlidingContainer
          backgroundSpecs={testimonialComponent.backgroundSpecs}
          renderArrayOfComponents={sectionContents}
          uniqueId={testimonialComponent.id}
          onTestimonialActionHandler={onTestimonialActionHandler}
        />
      </section>
    );
  }
};
export default MapTestimonials;
