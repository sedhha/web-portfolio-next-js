import { IBackgroundSpecs } from '@/constants/index';
import React from 'react';
import classes from './utils.module.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
type Props = {
  renderArrayOfComponents: JSX.Element[];
  backgroundSpecs: IBackgroundSpecs;
  uniqueId: string;
  onTestimonialActionHandler: (identifier: string) => void;
};

const CLASSES = {
  LEFT_CLASS: 'SwipeEffectShowToLeft',
  LEFT_CLASS_HIDE: 'SwipeEffectHideToLeft',
  RIGHT_CLASS_HIDE: 'SwipeEffectHideToRight',
};

const testimonialActions = {
  goLeft: 'goLeftButton_testimonial',
  goRight: 'goRightButton_testimonial',
};

export default function SlidingContainer({
  renderArrayOfComponents,
  backgroundSpecs,
  uniqueId,
  onTestimonialActionHandler,
}: Props) {
  const [currentPos, setCurrentPos] = React.useState(0);
  const [previousPos, setPrevPos] = React.useState(0);
  const [showClass, setShowClass] = React.useState(CLASSES.LEFT_CLASS);

  const onSwapClickHandler = (swapToLeft: boolean) => {
    const totalItems = renderArrayOfComponents?.length ?? 0;
    let newPosition;
    let prevPosition = currentPos;

    if (swapToLeft) {
      newPosition = currentPos - 1;
    } else {
      newPosition = currentPos + 1;
    }
    if (newPosition < 0) {
      newPosition = totalItems - 1;
    }
    if (newPosition >= totalItems) {
      newPosition = 0;
    }
    setCurrentPos(newPosition);
    setPrevPos(prevPosition);
  };
  const { imageGrade1, imageGrade2, backgroundUrl } = backgroundSpecs;

  const renderElement = renderArrayOfComponents.map((ele, index) => {
    let renderer = null;
    if (index === currentPos) {
      renderer = (
        <div
          key={uniqueId + index}
          className={[classes.FlexBoxContainer, classes[showClass]].join(' ')}>
          {ele}
        </div>
      );
    } else {
      const currPos = currentPos;
      const prevPos = previousPos;
      let hideClass;
      if (currPos === 0 && prevPos === currPos) {
        if (index === renderArrayOfComponents.length - 1) {
          hideClass = CLASSES.LEFT_CLASS_HIDE;
        } else hideClass = CLASSES.RIGHT_CLASS_HIDE;
      } else {
        const prevPointer =
          currPos <= 0 ? renderArrayOfComponents.length - 1 : currPos - 1;

        if (index === prevPointer) {
          hideClass = CLASSES.LEFT_CLASS_HIDE;
        } else {
          hideClass = CLASSES.RIGHT_CLASS_HIDE;
        }
      }

      renderer = (
        <div
          key={uniqueId + index}
          className={[classes.FlexBoxContainer, classes[hideClass]].join(' ')}>
          {ele}
        </div>
      );
    }

    return renderer;
  });

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(
          to right bottom,
          ${imageGrade1 || 'rgba(126,213,111,.8)'},
          ${imageGrade2 || 'rgba(40,180,133,.8)'}),
          url('${backgroundUrl}')`,
      }}
      className={classes.SlidingContainer}>
      {renderElement}
      <div
        className={classes.LeftNavigate}
        onClick={() => {
          onSwapClickHandler(true);
          onTestimonialActionHandler(testimonialActions.goLeft);
        }}>
        <AiOutlineLeft className={classes.NavigatorIconClass} />
      </div>

      <div
        className={classes.RightNavigate}
        onClick={() => {
          onSwapClickHandler(false);
          onTestimonialActionHandler(testimonialActions.goRight);
        }}>
        <AiOutlineRight className={classes.NavigatorIconClass} />
      </div>
    </div>
  );
}
