import React from 'react';
import classes from './Main.module.scss';

import About from '@/components/MainSection/about';
import { sectionAbout } from '@/constants/index';

import Features from '@/components/MainSection/features';
import { sectionFeatures } from '@/constants/index';

enum ActionTypes {
  about = 'navButtonActions__about__',
  projects = 'projectActions__projects__',
  testimonials = 'testimonialActions__testimonal__',
  workExperience = 'workExperienceActions__work__',
  participations = 'participationActions__participations__',
  videos = 'VideoViewActions__videoView__',
}

export default function Main() {
  //Complete Main Body

  const onActionCallback = (actionType: ActionTypes, buttonTerm: string) => {
    console.log('DIspatching with = ', actionType + buttonTerm);
    // TODO: Update Actions and Dispatch to backend: 'navButtonActions__about__' + buttonTerm
    // dispatch(updateActions(actionType + buttonTerm));
  };

  return (
    <main className={classes.mainBody}>
      <About
        mainContent={sectionAbout}
        classes={classes}
        onFollowUpButtonClick={(buttonTerm: string) =>
          onActionCallback(ActionTypes.about, buttonTerm)
        }
      />
      <Features sectionFeatures={sectionFeatures} classes={classes} />

      {/* <MapFeaturesSection sectionFeatures={sectionFeatures} classes={classes} />
      <MapProjects
        sectionProjects={sectionProjects}
        classes={classes}
        onClickCallback={onProjectsButtonCallback}
      />
      <MapTestimonials
        testimonialComponent={sectionReferences}
        classes={classes}
        onTestimonialActionHandler={onTestimonialActionHandler}
      />
      <MapExperienceandCocurricular
        exprerienceContent={sectionExperiences}
        classes={classes}
        onWorkExperienceHandler={onWorkExperienceHandler}
      />

      <MappingParticipants
        sectionsParticipations={sectionParticipations}
        onParticipationActionHandler={onParticipationActionHandler}
      />

      <MappingVideos
        sectionVideos={sectionVideos}
        onVideoClickHandler={onVideoClickHandler}
      /> */}
    </main>
  );
}
