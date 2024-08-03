import React from 'react';

import { SRGBColorSpace } from 'three';

import { ISceneData } from '../types/model';

export const useUpdateSkyboxTexture = (sceneData: ISceneData | null) => {
	React.useEffect(() => {
		if (!sceneData) return;

		const { skyboxTexture } = sceneData;
		skyboxTexture.colorSpace = SRGBColorSpace;
	}, [sceneData]);
};
