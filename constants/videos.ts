import { nanoid } from 'nanoid';
import { sectionIds } from './common';

export interface IVideoElements {
  id: string;
  customThumbnail: boolean;
  video_id: string;
  heading: string;
}
export interface IVideoComponents {
  elements: IVideoElements[];
}

export interface ISectionVideos {
  id: string;
  showSection: boolean;
  heading: string;
  headingStyle: Record<string, string | number>;
  videoComponents: IVideoComponents;
}

export const sectionVideos: ISectionVideos = {
  id: sectionIds.sectionVideos,
  heading: 'Workshop Talks and Tutorials',
  showSection: true,
  headingStyle: {},
  videoComponents: {
    //YT Only Supported
    elements: [
      {
        id: nanoid(),
        customThumbnail: false,
        video_id: 'F5_6-21GaxM',
        heading: 'QuickBooks oAuth: Refresh and Regenerate Tokens',
      },
      {
        id: nanoid(),
        customThumbnail: false,
        video_id: 'by9vgcW2tms',
        heading: 'CI-CD Pipeline: Github Actions in NEXT JS',
      },
      {
        id: nanoid(),
        customThumbnail: false,
        video_id: 'Y9LsULqXvNk',
        heading: 'Async Unmounted Component State Update Handling',
      },
      {
        id: nanoid(),
        customThumbnail: false,
        video_id: 'jH7y8doN_QQ',
        heading: 'IntelliPick: Screen multiple resumes efficiently!',
      },
      {
        id: nanoid(),
        customThumbnail: false,
        video_id: 'vRO0CXJC4Xw',
        heading: 'Understanding the Merge Sort Algorithm',
      },

      {
        id: nanoid(),
        customThumbnail: false,
        video_id: '8twIPoXoZeQ',
        heading: 'Setting Up UIPath Orchestrator to Trigger UIPath Files',
      },

      {
        id: nanoid(),
        customThumbnail: false,
        video_id: '8ZFZhe2HoMY',
        heading: 'Getting Started with Quickbooks API',
      },

      {
        id: nanoid(),
        customThumbnail: false,
        video_id: 'wauI5R_y3D0',
        heading: 'Converting an Internal HDD',
      },

      {
        id: nanoid(),
        customThumbnail: false,
        video_id: 'WAR2-X3veaE',
        heading: 'Virtual Gaming using OpenCV and Python',
      },
      {
        id: nanoid(),
        customThumbnail: false,
        video_id: 'DDPfM5DF368',
        heading: 'SpideyFolio: Open Source React Portfolio',
      },
      {
        id: nanoid(),
        customThumbnail: false,
        video_id: 'Ez6Kvxko72w',
        heading: 'Automating UIPath Startup',
      },
    ],
  },
};
