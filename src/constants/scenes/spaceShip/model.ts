import { Color, Euler, Vector2, Vector3 } from 'three';

export const MODEL_URL = '/model/model.gltf';
export const MODEL_SCALE = 0.18;
export const MODEL_POSITION_Y_SHIFT = -2;
export const MODEL_INITIAL_ROTATION = new Euler(0, Math.PI * 0.25, 0);

/** Model materials */
export const MODAL_NORMAL_MAP_SCALE = new Vector2(0.3);

/** Model shadows */
export const MODEL_SHADOW_POSITION = new Vector3(0, -0.6, 0);
export const MODEL_SHADOW_SCALE = 5;
export const MODEL_SHADOW_OPACITY = 0.8;
export const MODEL_SHADOW_COLOR = new Color('#000000');

/** Model animation */
export const MODEL_POSITION_ANIMATION_SCALE = 0.25;
export const MODEL_POSITION_ANIMATION_PERIOD = 20; // seconds
export const MODEL_ROTATION_ANIMATION_SCALE = Math.PI * 2;
export const MODEL_ROTATION_ANIMATION_PERIOD = 100; // seconds
