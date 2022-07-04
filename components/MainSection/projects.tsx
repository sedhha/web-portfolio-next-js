import {
  IFeatureList,
  IButtonList,
  IProjectComponent,
  ISectionProject,
} from '@/constants/index';
import { nanoid } from 'nanoid';

const getUlElements = (ulList: IFeatureList[]) => {
  if (ulList.length === 0 || ulList.length === undefined) return null;

  return (
    <ul>
      {ulList.map((element) => (
        <li key={element.id}>{element.display}</li>
      ))}
    </ul>
  );
};

const getButtons = (
  buttonList: IButtonList[],
  classes: Record<string, string>,
  onClickCallback: (buttonTerm: string) => void,
  buttonDescription: string
) => {
  if (buttonList.length === 0 || buttonList.length === undefined) return null;

  return buttonList.map((element) => (
    <div key={element.id}>
      <a
        href={element.href || '#'}
        target={'_blank'}
        rel='noreferrer'
        onClick={() =>
          onClickCallback(`${buttonDescription}___${element.buttonText}`)
        }
        className={[classes.btn, classes.btnWhite, classes.btnAnimated].join(
          ' '
        )}>
        {element.buttonText || 'Source Code'}
      </a>
    </div>
  ));
};

const breakStringParas = (
  stringPara: string,
  classes: Record<string, string>
) => {
  if (stringPara === '' || stringPara === undefined) return null;

  const stringParas = stringPara.split('\n');

  return stringParas.map((element) => (
    <p key={nanoid()} className={classes['project_card__info']}>
      {element}
    </p>
  ));
};

const mapProjects = (
  projectComponents: IProjectComponent,
  classes: Record<string, string>,
  onClickCallback: (buttonTerm: string) => void
) => {
  const projects = projectComponents.components.map((ele) => {
    const gradientString = `linear-gradient(to ${ele.front.gradientDirection},
				${ele.back.gradientColor1 || 'rgba(126,213,111,.8)'},
				${ele.back.gradientColor2 || 'rgba(40,180,133,.8)'}),
				url('${ele.front.imgSource}')`;

    const imgGradient = `url('${ele.front.imgSource}')`;
    const frontGradient = `linear-gradient(to ${ele.front.gradientDirection}, ${ele.front.gradientColor1},${ele.front.gradientColor2})`;
    const backgroundGradient = `linear-gradient(to ${ele.back.gradientDirection}, ${ele.back.gradientColor1},${ele.back.gradientColor2})`;

    const featureList = getUlElements(ele.front.featureList);
    const buttonList = getButtons(
      ele.back.buttonList,
      classes,
      onClickCallback,
      ele.display
    );
    const infoList = breakStringParas(ele.back.projectDescription, classes);

    let photoGradient = gradientString;
    if (ele.front.disableGradientForPhoto) photoGradient += `,${imgGradient}`;
    return (
      <div key={ele.id} className={classes['col-1-of-3']}>
        <div className={classes['project_card']}>
          <div
            style={{ backgroundImage: frontGradient }}
            className={[
              classes['project_card__side'],
              classes['project_card__side--front'],
            ].join(' ')}>
            <div
              style={{
                backgroundImage: photoGradient,
              }}
              className={classes['project_card__picture']}>
              &nbsp;
            </div>
            <h4 className={classes['project_card__heading']}>
              <span
                className={classes['project_card__heading-span']}
                style={{
                  backgroundImage: backgroundGradient,
                }}>
                {ele.display || 'The Sea Explorer'}
              </span>
            </h4>
            <div className={classes['project_card__details']}>
              {featureList}
            </div>
          </div>

          <div
            style={{ backgroundImage: backgroundGradient }}
            className={[
              classes['project_card__side'],
              classes['project_card__side--back'],
            ].join(' ')}>
            <div className={classes['project_card__cta']}>
              <div
                className={classes['project_card__box']}
                style={ele.back.specialHeaderStyling || {}}>
                <p
                  className={classes['project_card__projectinfoheading']}
                  style={ele.back.infoStyling || {}}>
                  {ele.back.display}
                </p>
                {infoList}
                {buttonList}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div key={projectComponents.id} className={classes['row_projects']}>
      {projects}
    </div>
  );
};

type ProjectProps = {
  sectionProjects: ISectionProject;
  classes: Record<string, string>;
  onClickCallback: (buttonTerm: string) => void;
};

const MapProjects = ({
  sectionProjects,
  classes,
  onClickCallback,
}: ProjectProps) => {
  if (!sectionProjects.showSection) return null;
  const projectSections = mapProjects(
    sectionProjects.projectComponents,
    classes,
    onClickCallback
  );
  return (
    <section
      id={sectionProjects.sectionProjects_sectionId}
      onScroll={() => console.log('Scrolling projects')}
      className={classes['section-projects']}>
      <div className={classes.centetText}>
        <h2
          className={[classes.headingSecondary].join(' ')}
          style={sectionProjects.projectsHeaderStyle || {}}>
          {sectionProjects.projectsHeader || 'Projects'}
        </h2>
      </div>
      {projectSections}
    </section>
  );
};

export default MapProjects;
