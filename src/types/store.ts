import type { setLoadingProgress } from '../actions';

export type StoreState = {
	loadingProgress: number;
	actions: {
		setLoadingProgress: ReturnType<typeof setLoadingProgress>;
	};
};
