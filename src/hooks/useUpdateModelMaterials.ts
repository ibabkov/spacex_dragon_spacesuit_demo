import React from 'react';

import { FrontSide, Mesh, MeshStandardMaterial } from 'three';

import { MODAL_NORMAL_MAP_SCALE } from '../constants/scenes/spaceShip';
import { ISceneData } from '../types/model';

export const useUpdateModelMaterials = (sceneData: ISceneData | null) => {
  React.useEffect(() => {
    if (!sceneData) return;

    const { scene, skyboxTexture } = sceneData;
    scene.traverse((child) => {
      if (
        child instanceof Mesh &&
        child.material instanceof MeshStandardMaterial
      ) {
        child.material.envMap = skyboxTexture;
        child.material.side = FrontSide;
        child.receiveShadow = false;
        child.material.normalScale = MODAL_NORMAL_MAP_SCALE;
      }
    });
  }, [sceneData]);
};
