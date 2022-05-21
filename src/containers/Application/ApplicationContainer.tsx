import React from 'react';

import { Canvas, RootState } from '@react-three/fiber';
import { ACESFilmicToneMapping, PCFSoftShadowMap, sRGBEncoding } from 'three';

import { CAMERA_INITIAL_OPTIONS } from '../../constants/camera';
import { SpaceShipScene } from '../../scenes/SpaceShipScene';
import { SceneLayout } from '../../components/SceneLayout';
import {
  useApplicationContext,
  useApplicationState,
} from '../../hooks/applicationContext';

export const ApplicationContainer: React.FC = () => {
  const contextValue = useApplicationState();
  const ApplicationContext = useApplicationContext();
  const [{ scene }] = contextValue;
  const { load } = scene;

  return (
    <SceneLayout load={load}>
      <Canvas onCreated={handleCreate} camera={CAMERA_INITIAL_OPTIONS}>
        <ApplicationContext.Provider value={contextValue}>
          <SpaceShipScene />
        </ApplicationContext.Provider>
      </Canvas>
    </SceneLayout>
  );
};

function handleCreate({ gl: renderer }: RootState) {
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.outputEncoding = sRGBEncoding;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
}
