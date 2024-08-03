import React from 'react';

import { ISceneData } from '../types/model';
import { useModifyApplicationState } from './applicationContext';
import { modifyOnLoad } from '../modifiers/modifyOnLoad';

export const useSceneLoad = (sceneData: ISceneData | null) => {
	const load = !!sceneData;
	const handleLoad = useModifyApplicationState(modifyOnLoad);

	React.useEffect(() => {
		if (!load) return;
		handleLoad();
	}, [load]);
};
