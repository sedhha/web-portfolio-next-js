import { sectionIds, iconsMapString } from './common';
import { nanoid } from 'nanoid';

const linkedinProps = {
  size: 30,
  color: 'blue',
};

export const sectionReferences: ITestimonialComponent = {
  showSection: true,
  id: sectionIds.sectionReferences_sectionId,
  heading: 'What others have to say about me?',
  headingStyle: { marginTop: '1rem', marginBottom: '1rem' },
  backgroundSpecs: {
    imageGrade1: 'rgba(130,231,242,.8)',
    imageGrade2: 'rgba(100,166,255,.8)',
    backgroundUrl: '/web-assets/referrals/hero.png',
  },
  userTestimonials: [
    {
      displayUri: '/web-assets/referrals/ankur.jpg',
      name: 'Ankur Verma',
      id: nanoid(),
      heading: 'Passionate Developer',
      positionAtTimeOfReferal: 'Ankur, Senior Decision Scientist at Yoptima',
      headingStyle: { marginBottom: '1.5rem' },
      socialHandles: [
        {
          href: 'https://www.linkedin.com/in/vankur/',
          id: 'userTestimonials__socialHandle__ankur__' + nanoid(),
          icon: {
            iconName: iconsMapString.linkedin,
            iconProps: linkedinProps,
          },
        },
      ],
      content: `Shivam is an inquisitive and passionate developer who was an integral part of the product development team and kind of a backbone for adopting newer technologies in a short period.
      During his tenure, he worked on several groundbreaking technologies that eased the day to day activities and has laid solid foundations for Software Development lifecycle and Workflow Automation.`,
    },
    {
      displayUri: '/web-assets/referrals/bhushan.jpg',
      name: 'Bhushan Kshire',
      id: nanoid(),
      heading: 'Great Decision Maker',
      positionAtTimeOfReferal: 'Bhushan, Product Manager at Yoptima',
      headingStyle: { marginBottom: '1.5rem' },
      socialHandles: [
        {
          href: 'https://www.linkedin.com/in/bhushan-kshire-069105148/',
          id: 'userTestimonials__socialHandle__bhushan__' + nanoid(),
          icon: {
            iconName: iconsMapString.linkedin,
            iconProps: linkedinProps,
          },
        },
      ],
      content: `Shivam is a great team player and a quick learner. During my tenure with him for a year and a half, I found Shivam learning technologies quickly with little to no support. What amazed me is his professional maturity, strong decision-making skills, and tendency to go the extra mile to achieve goals. His can-do attitude and diverse tech skills always helped us to deliver projects within timelines.
			No doubt he would be a valuable asset for any organization.`,
    },
    {
      displayUri: '/web-assets/referrals/mridula.jpg',
      name: 'Mridula',
      id: nanoid(),
      heading: 'Hardworking and extremely skilled',
      positionAtTimeOfReferal: 'Mridula, Operations Executive at Eckovation',
      headingStyle: { marginBottom: '1.5rem' },
      socialHandles: [
        {
          href: 'https://in.linkedin.com/in/mridula-pathak-942527141',
          id: 'userTestimonials__socialHandle__mridula__' + nanoid(),
          icon: {
            iconName: iconsMapString.linkedin,
            iconProps: linkedinProps,
          },
        },
      ],
      content: `It gives me immense pleasure to recommend Shivam Sahil. He was hired as Mentor for the MATLAB Course at Eckovation in July 2019. He was able to solve all the course-related queries and helped students to complete their course as well as finish internship projects which have numerous real-world problems.
                He is hardworking and sincere towards his work. He was also responsible for the evaluation of assignments and providing proper feedback and guidance to the students during the course curriculum. On a personal level, I found Shivam knowledgeable, focused and inquisitive towards his work.`,
    },
    {
      displayUri: '/web-assets/referrals/johnRajan.jpg',
      name: 'John Rajan',
      id: nanoid(),
      heading: 'Multi talented and Active',
      positionAtTimeOfReferal:
        'John Rajan, Professor (Manufacturing Engineering) at VIT',
      headingStyle: { marginBottom: '1.5rem' },
      socialHandles: [
        {
          href: 'https://www.linkedin.com/in/john-rajan-amaladas-728042136/',
          id: 'userTestimonials__socialHandle__john__' + nanoid(),
          icon: {
            iconName: iconsMapString.linkedin,
            iconProps: linkedinProps,
          },
        },
      ],
      content: `Shivam Sahil is my proctee. He is a multi talented student who participated in many events in India and abroad. He involved himself in a research work: "Application of blockchain technology in waste water management system" under my supervision. His academic performance is excellent.`,
    },
  ],
};

export interface IBackgroundSpecs {
  imageGrade1: string;
  imageGrade2: string;
  backgroundUrl: string;
}

export interface IconDetails {
  iconName: string;
  iconProps: Record<string, string | number>;
}

export interface ISocialHandle {
  href: string;
  id: string;
  icon: IconDetails;
}

export interface IUserTestimonial {
  displayUri: string;
  name: string;
  heading: string;
  positionAtTimeOfReferal: string;
  headingStyle: Record<string, string>;
  socialHandles: ISocialHandle[];
  content: string;
  id: string;
}

export interface ITestimonialComponent {
  showSection: boolean;
  id: string;
  heading: string;
  headingStyle: Record<string, string | number>;
  backgroundSpecs: IBackgroundSpecs;
  userTestimonials: IUserTestimonial[];
}
