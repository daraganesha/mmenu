import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuopen: false
		};
	}
	handleClick(){
		this.setState({ ...this.state, menuopen: !this.state.menuopen });
	}

	render() {
		return (
			<div className="container">
				<div className={this.state.menuopen ? 'menu open' : 'menu'} onClick={() => this.handleClick()}>
					<ul>
						<li>Menu 1</li>
						<li>Menu 2</li>
						<li>Menu 3</li>
					</ul>
				</div>

				<div className={this.state.menuopen ? 'main open' : 'main'}>
					<div 
						className={this.state.menuopen ? 'hamburger closed' : 'hamburger opened' }
						onClick={() =>  this.handleClick()}>
						<div className="openedsymbol">
							<span />
							<span />
							<span />
						</div>
						<div className="closedsymbol">
							&times;
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
