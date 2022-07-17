import { logEvent } from 'firebase/analytics';
import { analytics } from './firebase-client';
import { nanoid } from 'nanoid';

const user = nanoid();
const sessionStartedAt = new Date().getTime();
const sessionISOString = new Date().toISOString();

const userDetails = {
  userId: user,
  sessionStartedAt: sessionStartedAt,
  sessionISOString: sessionISOString,
};

console.log('User Details: ', userDetails);

export const eventTypes = {
  HOME_PAGE_LOADED: 'home-page-loaded',
  USER_ACTION_CALLBACK: 'user-action-callback',
};

export type AVAILABLE_EVENT_TYPES = keyof typeof eventTypes;

export interface IUserDetails {
  userId: string;
  sessionStartedAt: number;
  sessionISOString: string;
}

export enum ActionTypes {
  about = 'navButtonActions__about__',
  projects = 'projectActions__projects__',
  testimonials = 'testimonialActions__testimonal__',
  workExperience = 'workExperienceActions__work__',
  participations = 'participationActions__participations__',
  videos = 'VideoViewActions__videoView__',
  closeNavigator = 'NavigationActions__closeNavigator__',
  openNavigator = 'NavigationActions__openNavigator__',
  gotoTop = 'NavigationActions__knowMoreToTop__',
}

const logPageEvents = (
  event: AVAILABLE_EVENT_TYPES,
  metadata?: Record<string, string | number>
) => {
  if (analytics) logEvent(analytics, event, { ...metadata, user: userDetails });
  else {
    console.error('Unsupported Browser for Ayts Ops');
  }
};

const logUserEvents = (actionType: ActionTypes, actionKeyWord?: string) => {
  if (analytics)
    logEvent(analytics, eventTypes.USER_ACTION_CALLBACK, {
      action: actionType,
      user: userDetails,
      actionKeyWord: actionKeyWord ?? 'NA',
    });
  else {
    console.error('Unsupported Browser for Ayts Ops');
  }
};

const analyticsEvents = {
  logPageEvents,
  logUserEvents,
};
export default analyticsEvents;
