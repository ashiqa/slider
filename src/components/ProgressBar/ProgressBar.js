import React from 'react';
import {
  ProgressBarWrapper,
  ProgressText,
  ProgressBar,
  ProgressMeter,
} from './ProgressBarStyle';


const ProgressBox= ({ total, completed, text }) => {
  return (
    <>
      <ProgressBarWrapper total={total} completed={completed}>
        <ProgressBar>
          <ProgressMeter
            style={{
              width: `${completed}%`,
            }}
          />
        </ProgressBar>
        <ProgressText>{text}</ProgressText>
      </ProgressBarWrapper>
    </>
  );
};

export default ProgressBox;
