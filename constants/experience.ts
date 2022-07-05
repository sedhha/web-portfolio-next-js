import { nanoid } from 'nanoid';
import { sectionIds } from './common';

type ImageTypes = { src: string; alt: string };

export interface IExperienceElements {
  id: string;
  image: ImageTypes;
  companyName: string;
  dates: string;
  designation: string;
  href: string;
}

export interface IExperienceContent {
  id: string;
  heading: string;
  showSection: boolean;
  headingStyle: Record<string, string | number>;
  experienceContent: { experienceElements: IExperienceElements[] };
}

export const sectionExperiences: IExperienceContent = {
  id: sectionIds.sectionExperiences,
  heading: 'Work Experience and Co-Curicular',
  showSection: true,
  headingStyle: { marginTop: '-12rem' },
  experienceContent: {
    experienceElements: [
      {
        id: nanoid(),
        image: {
          src: '/web-assets/experiences/optum.jpg',

          alt: 'optum',
        },
        companyName: 'Optum (UHG)',
        dates: 'Oct 2021 - Present',
        designation: 'Software Engineer',
        href: 'https://www.optum.com/',
      },
      {
        id: nanoid(),
        image: {
          src: '/web-assets/experiences/yoptima.jpg',

          alt: 'yoptima',
        },
        companyName: 'Yoptima',
        dates: 'Jan 2020 - Oct 2021',
        designation: 'Software Engineer',
        href: 'https://www.yoptima.com/',
      },

      {
        id: nanoid(),
        image: {
          src: '/web-assets/experiences/eckovation.png',
          alt: 'eckovation',
        },
        companyName: 'Eckovation',
        dates: 'Jul 2019 - Jul 2020',
        designation: 'Programming & Robotics Mentor (Part Time)',
        href: 'https://www.eckovation.com/',
      },

      {
        id: nanoid(),
        image: {
          src: '/web-assets/experiences/transtutors.png',
          alt: 'transtutors',
        },
        companyName: 'Transtutors',
        dates: 'March 2020 - Present',
        designation: 'Freelancing Tutor (Part Time)',
        href: 'https://www.transtutors.com/',
      },

      {
        id: nanoid(),
        image: {
          src: '/web-assets/experiences/airindia.png',
          alt: 'airindia',
        },
        companyName: 'AirIndia',
        dates: 'May 2019 - June 2019',
        designation: 'Aircraft Maintenance Trainee (Internship)',
        href: 'https://www.airindia.in/about-airindia.htm',
      },

      {
        id: nanoid(),
        image: {
          src: '/web-assets/experiences/drdo.jpg',
          alt: 'drdo',
        },
        companyName: 'DRDO',
        dates: 'June 2019 - Aug 2019',
        designation: 'R&D Intern (Internship)',
        href: 'https://www.drdo.gov.in/',
      },

      {
        id: nanoid(),
        image: {
          src: '/web-assets/experiences/roverx.png',
          alt: 'rover',
        },
        companyName: 'Rover-X',
        dates: 'September 2016 - July 2019',
        designation: 'Founding Member and Science Team Lead',
        href: 'http://www.teamroverx.com/',
      },
      {
        id: nanoid(),
        image: {
          src: '/web-assets/experiences/chegg.png',
          alt: 'chegg',
        },
        companyName: 'Chegg',
        dates: 'Oct 2019 - July 2020',
        designation: 'Subject Matter Expert: ME (Part Time)',
        href: 'https://www.chegg.com/',
      },

      {
        id: nanoid(),
        image: {
          src: '/web-assets/experiences/vitradio.jpg',
          alt: 'vit_radio',
        },
        companyName: 'Vit Radio',
        dates: 'June 2018 - June 2019',
        designation: 'Radio Show Host',
        href: 'https://www.instagram.com/vitradio/',
      },

      {
        id: nanoid(),
        image: {
          src: '/web-assets/experiences/wrytin.png',
          alt: 'wrytin',
        },
        companyName: 'Wrytin',
        dates: 'May 2019 - June 2019',
        designation: 'Content Writer (Part Time)',
        href: 'https://wrytin.com/',
      },

      {
        id: nanoid(),
        image: {
          src: '/web-assets/experiences/delhispeaking.png',
          alt: 'delhispeaking',
        },
        companyName: 'Delhi Speaking',
        dates: 'May 2019 - September 2019',
        designation: 'Content Marketing Intern (Part Time)',
        href: 'https://delhispeaking.in/',
      },
    ],
  },
};
