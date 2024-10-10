import React from 'react';

import {
	AMBIENT_LIGHT_COLOR,
	AMBIENT_LIGHT_INTENSITY,
	DIRECTIONAL_LIGHT_COLOR,
	DIRECTIONAL_LIGHT_INTENSITY,
	DIRECTIONAL_Z_POSITION,
} from '../../constants/scenes/spaceShip';

export const Lights: React.FC = () => {
	return (
		<>
			<directionalLight
				castShadow={false}
				position={[0, 0, -DIRECTIONAL_Z_POSITION]}
				intensity={DIRECTIONAL_LIGHT_INTENSITY}
				color={DIRECTIONAL_LIGHT_COLOR}
			/>
			<ambientLight color={AMBIENT_LIGHT_COLOR} intensity={AMBIENT_LIGHT_INTENSITY} />
			<directionalLight position={[0, 0, DIRECTIONAL_Z_POSITION]} intensity={DIRECTIONAL_LIGHT_INTENSITY} color={DIRECTIONAL_LIGHT_COLOR} />
		</>
	);
};
