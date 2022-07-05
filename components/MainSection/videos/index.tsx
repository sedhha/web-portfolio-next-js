import React from 'react';
import classes from './MappingVideos.module.scss';
import { getMainHeading } from '@/components/utils';
// import Video from './VideoContainer';
import Video from './VideoContainer';
import { ISectionVideos } from '@/constants/videos';

type VideoProps = {
  sectionVideos: ISectionVideos;
  onVideoClickHandler: (identifier: string) => void;
};

export default function MappingVideos(props: VideoProps) {
  const { sectionVideos, onVideoClickHandler } = props;
  const VideosHeading = getMainHeading(
    sectionVideos.heading,
    sectionVideos.headingStyle,
    classes
  );
  return sectionVideos?.showSection ? (
    <section className={classes.MappingVideo} id={sectionVideos.id}>
      {VideosHeading}
      <div
        className={[classes.VideoGrid, classes.StyledScrollBarClass].join(' ')}>
        {sectionVideos.videoComponents.elements.map((element, index) => (
          <div className={classes.Videos} key={element.id}>
            <Video
              index={index}
              key={index}
              heading={element.heading}
              video_id={element.video_id}
              onVideoClickHandler={onVideoClickHandler}
            />
          </div>
        ))}
      </div>
    </section>
  ) : null;
}
