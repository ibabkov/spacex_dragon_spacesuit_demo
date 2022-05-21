export const CAMERA_POLAR_ANGLE = Math.PI * 0.39;
export const CAMERA_AUTO_ROTATE_SPEED = 0.1;
export const CAMERA_INITIAL_AZIMUTH_ANGLE = Math.PI * 0.9;
export const CAMERA_SHAKE_OPTIONS = {
  maxYaw: 0.1, // Max amount camera can yaw in either direction
  maxPitch: 0.1, // Max amount camera can pitch in either direction
  maxRoll: 0.1, // Max amount camera can roll in either direction
  yawFrequency: 0.1, // Frequency of the the yaw rotation
  pitchFrequency: 0.1, // Frequency of the pitch rotation
  rollFrequency: 0.1, // Frequency of the roll rotation
  intensity: 1, // initial intensity of the shake
  decay: false, // should the intensity decay over time
  decayRate: 0.65, // if decay = true this is the rate at which intensity will reduce
};
