import React from 'react';
import classes from './Main.module.scss';

import About from '@/components/MainSection/about';
import { sectionAbout } from '@/constants/index';

import Features from '@/components/MainSection/features';
import { sectionFeatures } from '@/constants/index';

import Projects from '@/components/MainSection/projects';
import { sectionProjects } from '@/constants/index';

import Testimonials from '@/components/MainSection/testimonials';
import { sectionReferences } from '@/constants/index';

import Experience from '@/components/MainSection/experience';
import { sectionExperiences } from '@/constants/index';

import Participations from '@/components/MainSection/participations';
import { sectionParticipations } from '@/constants/index';

import Videos from '@/components/MainSection/videos';
import { sectionVideos } from '@/constants/index';

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
      <Projects
        sectionProjects={sectionProjects}
        classes={classes}
        onClickCallback={(buttonTerm: string) =>
          onActionCallback(ActionTypes.projects, buttonTerm)
        }
      />
      <Testimonials
        testimonialComponent={sectionReferences}
        classes={classes}
        onTestimonialActionHandler={(identifier: string) =>
          onActionCallback(ActionTypes.testimonials, identifier)
        }
      />
      <Experience
        exprerienceContent={sectionExperiences}
        classes={classes}
        onWorkExperienceHandler={(identifier: string) =>
          onActionCallback(ActionTypes.workExperience, identifier)
        }
      />
      <Participations
        sectionsParticipations={sectionParticipations}
        onParticipationActionHandler={(identifier: string) =>
          onActionCallback(ActionTypes.workExperience, identifier)
        }
      />
      <Videos
        sectionVideos={sectionVideos}
        onVideoClickHandler={(identifier: string) =>
          onActionCallback(ActionTypes.videos, identifier)
        }
      />
    </main>
  );
}
