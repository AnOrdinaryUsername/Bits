import React, { ReactNode } from 'react';
import '../styles/main.css';

interface State {
	isToggleOn: boolean;
}

export default class App extends React.Component<unknown, State> {
	public readonly state: Readonly<State> = {
		isToggleOn: true
	}

	handleClick = (): void => {
		this.setState((test) => ({ isToggleOn: !test.isToggleOn }));
	};

	render(): ReactNode {
		return (
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'EAT MY' : 'OFF'}
			</button>
		);
	}
}