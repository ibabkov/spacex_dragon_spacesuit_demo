import React from 'react';

import { BlendFunction } from 'postprocessing';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

import { BLOOM_INTENSITY, LUMINANCE_SMOOTHING } from '../../constants/scenes/spaceShip';

export const Postprocessing: React.FC = () => {
	return (
		<EffectComposer>
			<Bloom
				blendFunction={BlendFunction.ADD}
				luminanceThreshold={0}
				luminanceSmoothing={LUMINANCE_SMOOTHING}
				intensity={BLOOM_INTENSITY}
			/>
		</EffectComposer>
	);
};
