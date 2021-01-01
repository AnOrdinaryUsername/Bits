import React, { ReactNode } from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import InstructionSetForm from '../components/InstructionSetForm';
// import PracticeOptions from '../components/PracticeOptions';
import styles from '../styles/App.css';



export default class App extends React.Component {
	render(): ReactNode {
		return (
			<React.Fragment>
				<Header />
				<main className={styles.main}>
					<Background>
						<InstructionSetForm />
					</Background>
				</main>
			</React.Fragment>
		);
	}
}