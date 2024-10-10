import React from 'react';

import { Canvas, RootState } from '@react-three/fiber';
import { ACESFilmicToneMapping, SRGBColorSpace } from 'three';

import { CAMERA_INITIAL_OPTIONS } from '../../constants/camera';
import { SpaceShipScene } from '../../scenes/SpaceShipScene';
import { SceneLayout } from '../../components/SceneLayout';
import { useStore } from '../../hooks/useStore';

export const ApplicationContainer: React.FC = () => {
	const { loadingProgress } = useStore();

	return (
		<SceneLayout loaded={loadingProgress === 1} loadingProgress={loadingProgress}>
			<Canvas dpr={[1, 2]} camera={CAMERA_INITIAL_OPTIONS} shadows={false} onCreated={handleCreate}>
				<SpaceShipScene />
			</Canvas>
		</SceneLayout>
	);
};

function handleCreate({ gl: renderer }: RootState) {
	renderer.toneMapping = ACESFilmicToneMapping;
	renderer.outputColorSpace = SRGBColorSpace;
}
