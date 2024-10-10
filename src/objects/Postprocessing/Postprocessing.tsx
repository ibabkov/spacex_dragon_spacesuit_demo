import React from 'react';

import { BlendFunction } from 'postprocessing';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { HalfFloatType } from 'three';

import { BLOOM_INTENSITY, LUMINANCE_SMOOTHING } from '../../constants/scenes/spaceShip';

export const Postprocessing: React.FC = () => {
	return (
		<EffectComposer multisampling={0} frameBufferType={HalfFloatType} resolutionScale={0.5}>
			<Bloom
				blendFunction={BlendFunction.ADD}
				luminanceThreshold={0}
				luminanceSmoothing={LUMINANCE_SMOOTHING}
				intensity={BLOOM_INTENSITY}
			/>
		</EffectComposer>
	);
};
