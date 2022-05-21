import React from 'react';

import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { CameraShake, OrbitControls } from '@react-three/drei';

import {
  CAMERA_AUTO_ROTATE_SPEED,
  CAMERA_INITIAL_AZIMUTH_ANGLE,
  CAMERA_POLAR_ANGLE,
  CAMERA_SHAKE_OPTIONS,
} from '../../constants/scenes/spaceShip';

export const Controls: React.FC = () => {
  const orbitControls = React.useRef<OrbitControlsImpl | null>(null);

  React.useEffect(() => {
    if (!orbitControls.current) return;

    orbitControls.current.setAzimuthalAngle(CAMERA_INITIAL_AZIMUTH_ANGLE);
  }, []);

  return (
    <>
      <OrbitControls
        makeDefault
        ref={orbitControls}
        autoRotate={true}
        enableZoom={false}
        enablePan={false}
        enableDamping={false}
        autoRotateSpeed={CAMERA_AUTO_ROTATE_SPEED}
        minPolarAngle={CAMERA_POLAR_ANGLE}
        maxPolarAngle={CAMERA_POLAR_ANGLE}
      />
      <CameraShake {...CAMERA_SHAKE_OPTIONS} />
    </>
  );
};
