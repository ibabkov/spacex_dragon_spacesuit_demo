import React from 'react';

import { Group } from 'three';
import { ContactShadows } from '@react-three/drei';

import { useModelAnimate } from './hooks';
import {
  MODEL_INITIAL_ROTATION,
  MODEL_SCALE,
  MODEL_SHADOW_COLOR,
  MODEL_SHADOW_POSITION,
  MODEL_SHADOW_SCALE,
} from '../../constants/scenes/spaceShip';
import { ISceneData } from '../../types/model';

export interface IModelProps {
  sceneData: ISceneData;
}

const Model = React.memo((props: IModelProps) => {
  const modelRef = React.useRef<Group | null>(null);
  const { sceneData } = props;

  useModelAnimate(modelRef, sceneData);

  return (
    <group ref={modelRef}>
      <primitive
        object={sceneData.scene}
        scale={MODEL_SCALE}
        rotation={MODEL_INITIAL_ROTATION}
      />
      <ContactShadows
        position={MODEL_SHADOW_POSITION}
        scale={MODEL_SHADOW_SCALE}
        color={MODEL_SHADOW_COLOR}
        opacity={1}
        blur={1}
        resolution={256}
      />
    </group>
  );
});

Model.displayName = 'Model';

export { Model };
