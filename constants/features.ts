import { nanoid } from 'nanoid';
import { sectionIds, iconsMapString } from './common';
import { configStyles, IDisplayIconStyle } from './css';

//getIcon(iconsMap.reactjs, { ...iconStyling })

export const sectionFeatures: IFeatures = {
  showSection: true,
  imageGrade1: 'rgba(126,213,111,.8)', //For the image gradient of second section
  imageGrade2: 'rgba(40,180,133,.8)',

  headImageUrl: '/web-assets/features/hero4.jpg',
  sectionHeading: 'Feathers in my Cap', // The top Display Section
  sectionFeatures_sectionId: sectionIds.sectionFeatures_sectionId,
  sections: [
    {
      displayIconStyle: configStyles.defaults.displayIconStyle,
      id: 'sections__' + nanoid(),
      displayIconId: 'sectionFeatures__sections__0__displayIcon__Blockchain', //This ID must be present in display
      displayIcon: iconsMapString.reactjs,
      heading: 'Mern Stack',
      headingStyle: {
        marginBottom: '1.5rem',
      },
      para: 'Analytics Applications, Configuration UI, Open Source Portfolios, etc.',
    },

    {
      displayIconStyle: configStyles.defaults.displayIconStyle,
      id: 'sections__' + nanoid(),
      displayIconId: 'sectionFeatures__sections__0__displayIcon__Blockchain', //This ID must be present in display
      //icon styling in stroke and fill. Make sure to keep it unique in case you're using id. Other wise this
      // property isn't required
      displayIcon: iconsMapString.database,
      heading: 'Blockchain',
      headingStyle: {
        marginBottom: '1.5rem',
      },
      para: 'Built decentralized finance, smart contracts and entire blockchain network using python and flask.',
    },

    {
      displayIconStyle: configStyles.defaults.displayIconStyle,
      id: 'sections__' + nanoid(),
      displayIconId: 'sectionFeatures__sections__0__displayIcon__Blockchain', //This ID must be present in display
      //icon styling in stroke and fill. Make sure to keep it unique in case you're using id. Other wise this
      // property isn't required
      displayIcon: iconsMapString.robot,
      heading: 'Robotics',
      headingStyle: {
        marginBottom: '1.5rem',
      },
      para: 'CAD modellnig, rapid manufacturing, microcontroller programming, IoT and socket communication.',
    },

    {
      displayIconStyle: configStyles.defaults.displayIconStyle,
      id: 'sections__' + nanoid(),
      displayIconId: 'sectionFeatures__sections__0__displayIcon__Blockchain', //This ID must be present in display
      //icon styling in stroke and fill. Make sure to keep it unique in case you're using id. Other wise this
      // property isn't required
      displayIcon: iconsMapString.eye,
      heading: 'Computer Vision',
      headingStyle: {
        marginBottom: '1.5rem',
      },
      para: 'Background removal, SIFT and SURF Feature extraction, Real time image socket transmission etc.',
    },
  ],
};

export interface ISection {
  displayIconStyle: IDisplayIconStyle;
  id: string;
  displayIconId: string;
  displayIcon: string;
  heading: string;
  headingStyle: Record<string, string>;
  para: string;
}

export interface IFeatures {
  showSection: boolean;
  imageGrade1: string;
  imageGrade2: string;
  headImageUrl: string;
  sectionHeading: string;
  sectionFeatures_sectionId: string;
  sections: ISection[];
}
