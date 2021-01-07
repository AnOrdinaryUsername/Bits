import React, { ReactNode } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Background from '../components/Background';
import Header from '../components/Header';
import { Home, HowItWorks, NotFound, Practice, Resources } from '../pages';
import styles from '../styles/App.css';


export default class App extends React.Component {
	constructor(props: null) {
		super(props);

	}

	render(): ReactNode {
		return (
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Header />
				<main className={styles.main}>                            
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/how-it-works">
							<HowItWorks />
						</Route>
						<Route path="/practice">
							<Background>
								<Practice />
							</Background>   
						</Route>
						<Route path="/resources">
							<Resources />
						</Route>
						{/* 404 page not found. */}
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
                </main>
			</BrowserRouter>
		);
	}
}