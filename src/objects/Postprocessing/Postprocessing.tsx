import React from 'react';

import {
  Bloom,
  DepthOfField,
  EffectComposer,
} from '@react-three/postprocessing';

import {
  BOKEH_SCALE,
  FOCUS_DISTANCE,
  FOCUS_LENGTH,
  LUMINANCE_SMOOTHING,
} from '../../constants/scenes/spaceShip';

export const Postprocessing: React.FC = () => {
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={FOCUS_DISTANCE}
        focalLength={FOCUS_LENGTH}
        bokehScale={BOKEH_SCALE}
      />
      <Bloom luminanceThreshold={0} luminanceSmoothing={LUMINANCE_SMOOTHING} />
    </EffectComposer>
  );
};
