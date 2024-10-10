import React from 'react';

import { useFrame as useFrameFiber, RootState } from '@react-three/fiber';

export const useFrame = (callback: (state: RootState, delta: number) => void, fps = 60) => {
	const lastCalled = React.useRef(0);
	const interval = 1 / fps;

	useFrameFiber((state, delta) => {
		lastCalled.current += delta;
		if (lastCalled.current > interval) {
			callback(state, delta);
			lastCalled.current = 0;
		}
	});
};
