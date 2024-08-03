import React from 'react';

import { CubeTextureLoader } from 'three';
import { DRACOLoader, GLTFLoader } from 'three-stdlib';

import { ISceneData } from '../types/model';
import { MODEL_URL, SKYBOX_TEXTURE_URL } from '../constants/scenes/spaceShip';

export function useSceneData(): ISceneData | null {
	const [sceneData, setSceneData] = React.useState(null);
	const getSceneData = React.useCallback(async () => {
		const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath('/draco/');
		const modelLoader = new GLTFLoader();
		modelLoader.setDRACOLoader(dracoLoader);
		const skyboxLoader = new CubeTextureLoader();
		const [model, skyboxTexture] = await Promise.all([modelLoader.loadAsync(MODEL_URL), skyboxLoader.loadAsync(SKYBOX_TEXTURE_URL as any)]);

		return setSceneData({
			scene: model.scene,
			animations: model.animations,
			skyboxTexture,
		} as any);
	}, []);

	React.useEffect(() => {
		getSceneData();
	}, []);

	return sceneData;
}
