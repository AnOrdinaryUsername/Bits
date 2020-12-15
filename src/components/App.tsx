import React, { ReactNode } from 'react';
import PracticeOptions from '../components/PracticeOptions';
import styles from '../styles/main.css';


export default class App extends React.Component {
	render(): ReactNode {
		return (
			<main className={styles['site-container']}>
				<PracticeOptions />
			</main>
		);
	}
}