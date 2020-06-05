import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBaby, faHandPaper, faHome, faTimes } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Coffee from './Mmenu/Coffee';
import Home from './Mmenu/Home';
import Others from './Mmenu/Others';
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
	setOpen() {
		this.setState({ ...this.state, menuopen: true });
	}
	setClose() {
		this.setState({ ...this.state, menuopen: false });
	}
	render() {
		return (
			<Router>
				<div className="container">
					<div className={this.state.menuopen ? 'menu open' : 'menu'}>
						<div className="icon">
							<ul>
								<li>
									<div className="icon-container">
										<Link to="/">
											<FontAwesomeIcon icon={faHome} />
										</Link>
									</div>
									<Link to="/" onClick={() => this.handleClick()}>
										<span>Home</span>
									</Link>
								</li>
								<li>
									<div className="icon-container">
										<Link to="/coffee">
											<FontAwesomeIcon icon={faCoffee} />
										</Link>
									</div>
									<Link to="/coffee" onClick={() => this.handleClick()}>
										<span>DRINK COFFEE</span>
									</Link>
								</li>
								<li>
									<div className="icon-container">
										<Link to="/others">
											<FontAwesomeIcon icon={faHandPaper} />
										</Link>
									</div>
									<Link to="/others" onClick={() => this.handleClick()}>
										<span>HANDPAPER</span>
									</Link>
								</li>
								<li>
									<div className="icon-container">
										<Link to="/others">
											<FontAwesomeIcon icon={faBaby} />
										</Link>
									</div>
									<Link to="/others" onClick={() => this.handleClick()}>
										<span>HELLO BABY</span>
									</Link>
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

							<div className="closedsymbol">
								<FontAwesomeIcon icon={faTimes} size="3x" />
							</div>
						</div>
						<div>
							<Switch>
								<Route path="/others">
									<Others />
								</Route>
								<Route path="/coffee">
									<Coffee />
								</Route>
								<Route path="/">
									<Home />
								</Route>
							</Switch>
						</div>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
