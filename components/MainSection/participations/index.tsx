import React from 'react';
import classes from './Paticipations.module.scss';
import { getMainHeading } from '@/components/utils';
import { ISectionParticipations } from '@/constants/participations';

type ParticipationProps = {
  sectionsParticipations: ISectionParticipations;
  onParticipationActionHandler: (identifier: string) => void;
};

export default function MappingParticipants(props: ParticipationProps) {
  const { sectionsParticipations, onParticipationActionHandler } = props;
  const participatioHeading = getMainHeading(
    sectionsParticipations.heading,
    {},
    classes
  );
  return sectionsParticipations.showSection ? (
    <section
      className={classes.SectionDefinition}
      id={sectionsParticipations.id}>
      {participatioHeading}
      <div
        className={[
          classes.participationGrid,
          classes.SectionDefinition_withBg,
          classes.StyledScrollBarClass,
        ].join(' ')}
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(130, 231, 242, 0.8), rgba(100, 166, 255, 0.8)), url('${sectionsParticipations.background}')`,
        }}>
        {sectionsParticipations.elements.map((ele) => {
          return (
            <div
              key={ele.id}
              className={classes.participationGrid_item}
              onClick={() => onParticipationActionHandler(ele.eventName)}>
              {ele.labelTagNeeded && (
                <div
                  // style={ele.style || {}}
                  className={[
                    classes.HonorLabel,
                    ele.labelTagNeeded ? classes[ele.badgeClass ?? ''] : null,
                  ].join(' ')}>
                  {ele.labelTag}
                </div>
              )}
              <div className={classes.ImageItem}>
                <picture>
                  <source
                    srcSet={`${ele.imgSource} 400w, ${ele.imgSource} 800w, ${ele.imgSource} 1200w`}
                    sizes='(min-width: 1280px) 1200px,(min-width: 768px) 400px,100vw'
                  />
                  <img
                    className={classes.ImageItem_img}
                    src={ele.imgSource}
                    alt={ele.imgAlt}
                  />
                </picture>
              </div>
              <label className={classes.ImageItem_Label}>{ele.eventName}</label>
            </div>
          );
        })}
      </div>
    </section>
  ) : null;
}
