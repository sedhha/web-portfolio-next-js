import { nanoid } from 'nanoid';
import { sectionIds } from './common';

const monthDiff = (d1: Date, d2: Date): number => {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
};

const joiningDate = new Date('13 Jan 2020');
const today = new Date();

const numberOfMonths = monthDiff(joiningDate, today) - 2;

export const sectionAbout: IAbout = {
  showSection: true,
  mainContent_sectionId: sectionIds.mainContent_sectionId,
  aboutParaHeader: 'Who Am I?',
  mainIntroContents: [
    {
      id: 'mainIntroContents__' + nanoid(),
      heading: 'Professionally',
      headingStyle: {
        marginBottom: '1.5rem',
      },
      description: `Working as a Software Engineer for the last ${numberOfMonths} months, I specialize in MERN   stack development, Restful APIs and microservices, data-driven intelligence, automation etc. In my spare time, I love to be a part of the ever-growing tech community, hackathons and entrepreneurship events where I join as a participant, mentor, workshop leader, etc.`,
      descriptionStyle: {},
    },

    {
      id: 'mainIntroContents__' + nanoid(),
      heading: 'Personally',
      headingStyle: {
        marginBottom: '1.5rem',
      },
      description: `I am a tech enthusiast passionate about edge-cutting technologies like Full Stack, Robotics, IoT and Computer Vision. Additionally, I also love to explore writing, science fiction, cosmos, mathematics and time travel. I relish digging deep into the mystical mathematics that appears to me as the answer to unveil the deepest enigmas of the Universe.
			For me, the world is nothing more than a complex mathematical model embedded with tons of analytical functions and expressions which has been programmed by the almighty god who is probably the greatest mathematician and programmer of all time!`,
      descriptionStyle: {},
    },
  ], //Includes the Header along with the Description

  aboutConnectButtonText: 'Linkedin Connect', //Note that Forward arrow will remain and if you want to replace that, you may directly go to the code snippet
  aboutConnectButtonRedirectLink: 'https://www.linkedin.com/in/shivamsahil/',
  composition: {
    //Images to be displayed in About Section
    img1: '/web-assets/composition/cover-3.jpg',
    img2: '/web-assets/composition/cover-2.jpg',
    img3: '/web-assets/composition/cover-1.jpg',
  },
};

export interface IMainIntroContent {
  id: string;
  heading: string;
  headingStyle: Record<string, string>;
  description: string;
  descriptionStyle: Record<string, string>;
}

export interface IComposition {
  img1: string;
  img2: string;
  img3: string;
}

export interface IAbout {
  showSection: boolean;
  mainContent_sectionId: string;
  aboutParaHeader: string;
  mainIntroContents: IMainIntroContent[];
  aboutConnectButtonText: string;
  aboutConnectButtonRedirectLink: string;
  composition: IComposition;
  //   mainIntroContents:
}
