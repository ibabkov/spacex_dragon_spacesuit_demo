import React from 'react';

import styles from './Fallback.module.css';

export type FallbackProps = {
	loadingProgress: number;
};

export const Fallback: React.FC<FallbackProps> = props => {
	const { loadingProgress } = props;

	return (
		<div className={styles.container}>
			<span className={styles.loader}>Loading</span>
			{loadingProgress >= 0 && (
				<span className={styles.progress}>
					<span className={styles.bar} style={{ transform: `scaleX(${loadingProgress})` }} />
				</span>
			)}
		</div>
	);
};
