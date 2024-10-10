import { AnimationClip, CubeTexture, Group } from 'three';

export type SceneData = {
	scene: Group;
	animations: AnimationClip[];
	skyboxTexture: CubeTexture;
};
