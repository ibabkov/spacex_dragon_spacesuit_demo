import React from 'react';

import classNames from 'classnames';

import { Fallback } from '../Fallback';
import styles from './SceneLayout.module.css';

export type MapLayoutProps = {
	children: React.ReactNode;
	loaded: boolean;
	loadingProgress: number;
};

export const SceneLayout: React.FC<MapLayoutProps> = props => {
	const { children, loaded, loadingProgress } = props;

	return (
		<div className={styles['container']}>
			<div className={classNames(styles['scene'], loaded && styles['scene-show'])}>{children}</div>
			<div className={classNames(styles['fallback'], !loaded && styles['fallback-show'])}>
				<Fallback loadingProgress={loadingProgress} />
			</div>
		</div>
	);
};
