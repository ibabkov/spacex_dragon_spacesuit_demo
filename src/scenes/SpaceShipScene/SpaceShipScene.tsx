import React from 'react';

import { Environment } from '@react-three/drei';

import { Controls } from '../../objects/Controls';
import { Lights } from '../../objects/Lights';
import { Model } from '../../objects/Model';
import { Postprocessing } from '../../objects/Postprocessing';
import { useSceneData } from '../../hooks/useSceneData';
import { useUpdateModelMaterials } from '../../hooks/useUpdateModelMaterials';
import { useUpdateSkyboxTexture } from '../../hooks/useUpdateSkyboxTexture';
import { useSceneLoad } from '../../hooks/useSceneLoad';

const SpaceShipScene = React.memo(() => {
  const sceneData = useSceneData();
  useUpdateModelMaterials(sceneData);
  useUpdateSkyboxTexture(sceneData);
  useSceneLoad(sceneData);

  if (!sceneData) {
    return null;
  }

  return (
    <>
      <Environment background map={sceneData.skyboxTexture} />
      <Controls />
      <Lights />
      <Model sceneData={sceneData} />
      <Postprocessing />
    </>
  );
});

SpaceShipScene.displayName = 'SpaceShipScene';

export { SpaceShipScene };
