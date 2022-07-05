import { nanoid } from 'nanoid';

export interface INetwork {
  id: string;
  name: string;
  url: string;
  identifierName: string;
}
export interface IFooter {
  copyrightDetails: { name: string };
  networks: INetwork[];
}
export const footerData = {
  copyrightDetails: { name: 'Shivam Sahil' },
  networks: [
    {
      id: 'networks__' + nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/SeedhaB',
      identifierName: 'twitter',
    },
    {
      id: 'networks__' + nanoid(),
      name: 'codepen',
      url: 'https://devpost.com/sedhha',
      identifierName: 'devpost',
    },
    {
      id: 'networks__' + nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shivamsahil/',
      identifierName: 'linkedin',
    },
    {
      id: 'networks__' + nanoid(),
      name: 'github',
      url: 'https://github.com/sedhha',
      identifierName: 'github',
    },
    {
      id: 'networks__' + nanoid(),
      name: 'youtube',
      url: 'https://www.youtube.com/channel/UCenRU1EVBo-cWz978u4P4gg',
      identifierName: 'youtube',
    },
    {
      id: 'networks__' + nanoid(),
      name: 'email',
      url: 'mailto:activity.schoolsh2@gmail.com',
      identifierName: 'email',
    },
    {
      id: 'networks__' + nanoid(),
      name: 'wrytin',
      url: 'https://wrytin.com/shivamsahil',
      identifierName: 'wrytin',
    },
    {
      id: 'networks__' + nanoid(),
      name: 'wordpress',
      url: 'https://technopain.wordpress.com/',
      identifierName: 'wordpress',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
