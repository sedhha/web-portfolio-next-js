import React from 'react';
import classes from './MappingVideos.module.scss';
import ReactPlayer from 'react-player';

const embedOptions = {
  youtube: {
    playerVars: {
      controls: 1,
      fs: 1,
      // origin: ,
      modestbranding: 1,
    },
  },
};

type VideoContainerProps = {
  index: number;
  heading: string;
  video_id: string;
  onVideoClickHandler: (identifier: string) => void;
};
export default function VideoContainer(props: VideoContainerProps) {
  const { index, heading, video_id, onVideoClickHandler } = props;
  return (
    <div className={classes.VideoElements_RP}>
      <label
        className={
          index % 3 === 0
            ? classes.GridLabel_blue
            : index % 2 === 0
            ? classes.GridLabel_orange
            : classes.GridLabel_green
        }>
        {heading}
      </label>
      <section className={classes.Videos}>
        <ReactPlayer
          className={classes.reactPlayer}
          width='100%'
          height='100%'
          config={embedOptions}
          url={'https://www.youtube.com/watch?v=' + video_id}
          //   onVideoClickHandler={onVideoClickHandler}
          onPlay={() => onVideoClickHandler('onPlayEvent__' + heading)}
          onPause={() => onVideoClickHandler('onPauseEvent__' + heading)}
          onEnded={() => onVideoClickHandler('onEndedEvent__' + heading)}
        />
      </section>
    </div>
  );
}
