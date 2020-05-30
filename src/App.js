import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBaby, faHandPaper } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuopen: false
		};
	}
	handleClick() {
		this.setState({ ...this.state, menuopen: !this.state.menuopen });
	}

	render() {
		return (
			<div className="container">
				<div className={this.state.menuopen ? 'menu open' : 'menu'} onClick={() => this.handleClick()}>
					<div className="icon">
						<ul>
							<li>
								<div className="icon-container">
									<FontAwesomeIcon icon={faCoffee} />
								</div>
								<span>DRINK COFFEE</span>
							</li>
							<li>
								<div className="icon-container">
									<FontAwesomeIcon icon={faHandPaper} />
								</div>
								<span>HANDPAPER</span>
							</li>
							<li>
								<div className="icon-container">
									<FontAwesomeIcon icon={faBaby} />
								</div>
								<span>HELLO BABY</span>
							</li>
						</ul>
					</div>
				</div>

				<div className={this.state.menuopen ? 'main open' : 'main'}>
					<div
						className={this.state.menuopen ? 'hamburger opened' : 'hamburger closed'}
						onClick={() => this.handleClick()}
					>
						<div className="openedsymbol">
							<span />
							<span />
							<span />
						</div>

						<div className="closedsymbol">&times;</div>
					</div>

					<p>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
						ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
						dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
						sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
						invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
						justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
						ipsum dolor sit amet.
					</p>
				</div>
			</div>
		);
	}
}

export default App;
