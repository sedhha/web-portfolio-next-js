import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillRedditCircle,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineCodepen,
  AiOutlineYoutube,
} from 'react-icons/ai';
import { FiMinimize2 } from 'react-icons/fi';
import { FaReact, FaDatabase, FaEye, FaWordpressSimple } from 'react-icons/fa';
import { BsTriangle, BsPencilSquare } from 'react-icons/bs';
import { GiRobotHelmet } from 'react-icons/gi';
import React from 'react';
import { iconsMapString } from '@/constants/common';

export const iconsMap = {
  //Refer to https://react-icons.github.io/react-icons/,
  [iconsMapString.eye]: FaEye,
  [iconsMapString.database]: FaDatabase,
  [iconsMapString.reactjs]: FaReact,
  [iconsMapString.robot]: GiRobotHelmet,
  [iconsMapString.linkedin]: AiFillLinkedin,
  [iconsMapString.facebook]: AiFillFacebook,
  [iconsMapString.instagram]: AiFillInstagram,
  [iconsMapString.reddit]: AiFillRedditCircle,
  [iconsMapString.email]: AiOutlineMail,
  [iconsMapString.github]: AiOutlineGithub,
  [iconsMapString.goTop]: BsTriangle,
  [iconsMapString.twitter]: AiOutlineTwitter,
  [iconsMapString.codepen]: AiOutlineCodepen,
  [iconsMapString.youtube]: AiOutlineYoutube,
  [iconsMapString.wrytin]: BsPencilSquare,
  [iconsMapString.wordpress]: FaWordpressSimple,
  [iconsMapString.minimize]: FiMinimize2,
};

export type iconsMapKey = keyof typeof iconsMap;

export const getIcon = (Icon: React.FC, props: any) => {
  const Component = Icon;
  return <Component {...props} />;
};
export const getIconByName = (IconName: iconsMapKey, props: any) => {
  props = props || {};
  const Component = iconsMap[IconName];
  return <Component {...props} />;
};
