import React from 'react';

import { sRGBEncoding } from 'three';

import { ISceneData } from '../types/model';

export const useUpdateSkyboxTexture = (sceneData: ISceneData | null) => {
  React.useEffect(() => {
    if (!sceneData) return;

    const { skyboxTexture } = sceneData;
    skyboxTexture.encoding = sRGBEncoding;
  }, [sceneData]);
};
