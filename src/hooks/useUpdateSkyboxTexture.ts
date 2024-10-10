import React from 'react';

import { SRGBColorSpace } from 'three';

import { SceneData } from '../types/model';

export const useUpdateSkyboxTexture = (sceneData: SceneData | null) => {
	React.useEffect(() => {
		if (!sceneData) return;

		const { skyboxTexture } = sceneData;
		skyboxTexture.colorSpace = SRGBColorSpace;
	}, [sceneData]);
};
