import React from 'react';

import { Group } from 'three';
import { Shadow } from '@react-three/drei';

import { useModelAnimate } from './hooks';
import {
	MODEL_INITIAL_ROTATION,
	MODEL_SCALE,
	MODEL_SHADOW_COLOR,
	MODEL_SHADOW_OPACITY,
	MODEL_SHADOW_POSITION,
	MODEL_SHADOW_SCALE,
} from '../../constants/scenes/spaceShip';
import { SceneData } from '../../types/model';

export type ModelProps = {
	sceneData: SceneData;
};

const Model = React.memo((props: ModelProps) => {
	const modelRef = React.useRef<Group | null>(null);
	const { sceneData } = props;

	useModelAnimate(modelRef, sceneData);

	return (
		<group ref={modelRef}>
			<primitive object={sceneData.scene} scale={MODEL_SCALE} rotation={MODEL_INITIAL_ROTATION} />
			<Shadow
				colorStop={0}
				scale={MODEL_SHADOW_SCALE}
				position={MODEL_SHADOW_POSITION}
				color={MODEL_SHADOW_COLOR}
				opacity={MODEL_SHADOW_OPACITY}
			/>
		</group>
	);
});

Model.displayName = 'Model';

export { Model };
