import React from 'react';

import { CubeTextureLoader, LoadingManager } from 'three';
import { DRACOLoader, GLTFLoader } from 'three-stdlib';

import { SceneData } from '../types/model';
import { MODEL_URL, SKYBOX_TEXTURE_URL } from '../constants/scenes/spaceShip';
import { useStore } from './useStore';

export function useSceneData(): SceneData | null {
	const [sceneData, setSceneData] = React.useState<SceneData | null>(null);
	const { actions } = useStore();
	const getSceneData = React.useCallback(async () => {
		const loadingManager = new LoadingManager();

		loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
			actions.setLoadingProgress({ progress: itemsLoaded / itemsTotal });
		};

		const dracoLoader = new DRACOLoader(loadingManager);
		dracoLoader.setDecoderPath('/draco/');

		const modelLoader = new GLTFLoader(loadingManager);
		modelLoader.setDRACOLoader(dracoLoader);

		const skyboxLoader = new CubeTextureLoader(loadingManager);

		const [model, skyboxTexture] = await Promise.all([modelLoader.loadAsync(MODEL_URL), skyboxLoader.loadAsync(SKYBOX_TEXTURE_URL as any)]);

		setSceneData({
			scene: model.scene,
			animations: model.animations,
			skyboxTexture,
		});
	}, []);

	React.useEffect(() => {
		getSceneData();
	}, [getSceneData]);

	return sceneData;
}
