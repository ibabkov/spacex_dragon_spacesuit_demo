import React from 'react';

import classNames from 'classnames';

import { Fallback } from '../Fallback';
import styles from './SceneLayout.module.css';

export interface IMapLayoutProps {
	children: React.ReactNode;
	load: boolean;
}

export const SceneLayout: React.FC<IMapLayoutProps> = props => {
	const { children, load } = props;

	return (
		<div className={styles['container']}>
			<div className={classNames(styles['scene'], load && styles['scene-show'])}>{children}</div>
			<div className={classNames(styles['fallback'], !load && styles['fallback-show'])}>
				<Fallback load={load} />
			</div>
		</div>
	);
};
