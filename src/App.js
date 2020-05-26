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
				<div className={this.state.menuopen ? 'menu open' : 'menu'} onClick={() => this.handleClick()} />
				<div className={this.state.menuopen ? 'main open' : 'main'}>
					<div className="hamburger" onClick={() => this.handleClick()}>
						<span />
						<span />
						<span />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
