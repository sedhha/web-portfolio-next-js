import { IAbout, IMainIntroContent } from '@/constants/about';

type Props = {
  classes: Record<string, string>;
  onFollowUpButtonClick: (buttonTerm: string) => void;
  mainContent: IAbout;
};

const mapParagraphContent = (
  mainIntroContents: IMainIntroContent[],
  classes: Record<string, string>
) => {
  return mainIntroContents.map((element) => {
    return (
      <div key={element.id} className={classes['heading-para']}>
        <h3
          style={element.headingStyle || {}}
          className={[
            classes['heading-tertiary'],
            classes['backgroundGradient'],
          ].join(' ')}>
          {element.heading}
        </h3>
        {element.description.split('\n').map((ee, index) => (
          <p
            key={element.id + '_p_' + index}
            style={element.descriptionStyle || {}}
            className={classes['paragraph']}>
            {ee}
          </p>
        ))}
      </div>
    );
  });
};
const MappingAbout = ({
  mainContent,
  classes,
  onFollowUpButtonClick,
}: Props) => {
  if (!mainContent.showSection) return null;
  const paragraphContent = mapParagraphContent(
    mainContent.mainIntroContents,
    classes
  );
  return (
    <section
      id={mainContent.mainContent_sectionId}
      className={classes.sectionAbout}>
      <div className={classes.centetText}>
        <h2 className={[classes.headingSecondary].join(' ')}>
          {mainContent.aboutParaHeader || 'WHO AM I?'}
        </h2>
      </div>

      <div className={classes.row_section}>
        <div>
          {paragraphContent}
          <a
            href={mainContent.aboutConnectButtonRedirectLink || '#'}
            target={'_blank'}
            rel={'noreferrer'}
            onClick={() =>
              onFollowUpButtonClick(
                '_aboutSection__' + mainContent.aboutConnectButtonText
              )
            }
            className={classes['btn-text']}>
            {mainContent.aboutConnectButtonText || 'Learn More '} &#8594;
          </a>
        </div>

        <div className={classes['composition']}>
          <picture>
            <source
              srcSet={`${mainContent.composition.img1} 400w,
              ${mainContent.composition.img1} 800w,
              ${mainContent.composition.img1} 1200w`}
              sizes='(min-width: 1280px) 1200px,
             (min-width: 768px) 400px,
             100vw'
            />
            <img
              src={mainContent.composition.img1}
              alt={'composiiton images'}
              className={[
                classes['composition__photo'],
                classes['composition__photo--p1'],
              ].join(' ')}
            />
          </picture>
          <picture>
            <source
              srcSet={`${mainContent.composition.img2} 400w,
              ${mainContent.composition.img2} 800w,
              ${mainContent.composition.img2} 1200w`}
              sizes='(min-width: 1280px) 1200px,
             (min-width: 768px) 400px,
             100vw'
            />
            <img
              src={mainContent.composition.img2}
              alt={'composiiton images'}
              className={[
                classes['composition__photo'],
                classes['composition__photo--p2'],
              ].join(' ')}
            />
          </picture>

          <picture>
            <source
              srcSet={`${mainContent.composition.img3} 400w,
              ${mainContent.composition.img3} 800w,
              ${mainContent.composition.img3} 1200w`}
              sizes='(min-width: 1280px) 1200px,
             (min-width: 768px) 400px,
             100vw'
            />
            <img
              src={mainContent.composition.img3}
              alt={'composiiton images'}
              className={[
                classes['composition__photo'],
                classes['composition__photo--p3'],
              ].join(' ')}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default MappingAbout;
