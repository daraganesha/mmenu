import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuopen: false
		};
	}

	handleClick() {
		this.setState({ ...this.state, menuopen: !this.state.menuopen });
		console.log(this.state.menuopen);
	}

	render() {
		return (
			<div className="container">
				container
				<div className={this.state.menuopen ? 'menu open' : 'menu'} onClick={() => this.handleClick()}>
					menu
				</div>
				<div className={this.state.menuopen ? 'main open' : 'main'}>
					main
					<button onClick={() => this.handleClick()}>X</button>
				</div>
			</div>
		);
	}
}

export default App;
