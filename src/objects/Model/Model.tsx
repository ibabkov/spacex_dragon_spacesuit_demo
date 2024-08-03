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
import { ISceneData } from '../../types/model';

export interface IModelProps {
	sceneData: ISceneData;
}

const Model = React.memo((props: IModelProps) => {
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
