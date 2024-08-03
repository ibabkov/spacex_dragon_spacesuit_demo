import React from 'react';

import { useAnimations } from '@react-three/drei';
import { Clock, Group } from 'three';
import { useFrame, useThree } from '@react-three/fiber';

import { ISceneData } from '../../../types/model';
import { getModelAnimationProgress } from '../helpers';
import {
	MODEL_POSITION_ANIMATION_PERIOD,
	MODEL_POSITION_ANIMATION_SCALE,
	MODEL_POSITION_Y_SHIFT,
	MODEL_ROTATION_ANIMATION_PERIOD,
	MODEL_ROTATION_ANIMATION_SCALE,
} from '../../../constants/scenes/spaceShip';

export function useModelAnimate(ref: React.MutableRefObject<Group | null>, model: ISceneData) {
	const { animations } = model;
	const { scene } = useThree();
	const { actions } = useAnimations(animations, scene);
	const clock = React.useMemo(() => new Clock(), []);

	React.useEffect(() => {
		actions.metarigAction?.reset().play();
	}, []);

	useFrame(() => {
		if (!ref.current) return;

		const time = clock.getElapsedTime();
		const position = getModelAnimationProgress(time, MODEL_POSITION_ANIMATION_PERIOD) * MODEL_POSITION_ANIMATION_SCALE;
		const rotation = getModelAnimationProgress(time, MODEL_ROTATION_ANIMATION_PERIOD) * MODEL_ROTATION_ANIMATION_SCALE;

		ref.current.position.set(-position, position + MODEL_POSITION_Y_SHIFT, -position);
		ref.current.rotation.set(0, rotation, 0);
	});
}
