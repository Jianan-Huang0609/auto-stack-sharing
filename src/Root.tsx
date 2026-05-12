import React from 'react';
import {Composition} from 'remotion';
import {N8nPipelinePrototype} from './N8nPipelinePrototype';

export const Root: React.FC = () => {
  return (
    <Composition
      id="N8nPipelinePrototype"
      component={N8nPipelinePrototype}
      durationInFrames={420}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{}}
    />
  );
};
