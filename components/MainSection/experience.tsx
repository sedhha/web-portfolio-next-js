import { getMainHeading } from '@/components/utils';
import { IExperienceElements, IExperienceContent } from '@/constants/index';
const getExperienceContent = (
  experienceElements: IExperienceElements[],
  classes: Record<string, string>,
  updateWorkExperienceActions: (identifier: string) => void
) => {
  //console.log(experienceElements);
  return experienceElements.map((element) => {
    return (
      <a
        className={classes['section-gridbox__anchortag']}
        target={'_blank'}
        rel={'noreferrer'}
        href={element.href || 'https://www.google.com/'}
        key={element.id}
        onClick={() => updateWorkExperienceActions(element.companyName)}>
        <div className={classes['section-gridbox__gridElement']}>
          <picture>
            <source
              srcSet={`${element.image.src} 400w,
              ${element.image.src} 800w,
              ${element.image.src} 1200w`}
              sizes='(min-width: 1280px) 1200px,
             (min-width: 768px) 400px,
             100vw'
            />
            <img
              className={classes['section-gridbox__gridElement--img']}
              src={element.image.src}
              alt={element.image.alt || 'img'}
            />
          </picture>

          <div>
            <p className={classes['section-gridbox__gridElement--date-widget']}>
              {element.companyName || 'Company Name'}
            </p>
            <p className={classes['section-gridbox__gridElement--date-widget']}>
              {element.dates}
            </p>
            <p className={classes['section-gridbox__gridElement--designation']}>
              {element.designation}
            </p>
          </div>
        </div>
      </a>
    );
  });
};

type ExperienceProps = {
  classes: Record<string, string>;
  onWorkExperienceHandler: (identifier: string) => void;
  exprerienceContent: IExperienceContent;
};
const MapExperienceandCocurricular = ({
  exprerienceContent,
  classes,
  onWorkExperienceHandler,
}: ExperienceProps) => {
  if (!exprerienceContent.showSection) return null;
  const sectionHeading = getMainHeading(
    exprerienceContent.heading,
    exprerienceContent.headingStyle,
    classes
  );

  const experienceElements = getExperienceContent(
    exprerienceContent.experienceContent.experienceElements,
    classes,
    onWorkExperienceHandler
  );
  return (
    <section
      key={'experience_Section'}
      className={classes['section-experience']}>
      {sectionHeading}

      <div className={classes['section-gridbox']}>{experienceElements}</div>
    </section>
  );
};

export default MapExperienceandCocurricular;
