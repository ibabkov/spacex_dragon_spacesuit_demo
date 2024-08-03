import { AnimationClip, CubeTexture, Group } from 'three';

export interface ISceneData {
	scene: Group;
	animations: AnimationClip[];
	skyboxTexture: CubeTexture;
}
