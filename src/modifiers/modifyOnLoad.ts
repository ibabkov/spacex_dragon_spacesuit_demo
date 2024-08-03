import { TApplicationStateModifier } from '../types/applicationContext';

export const modifyOnLoad = (): TApplicationStateModifier => {
	return ({ scene }) => {
		return {
			scene: { ...scene, load: true },
		};
	};
};
