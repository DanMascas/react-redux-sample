import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

export default class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";

    return (
      <div className='row'>
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                  <IndexLink to="/" onClick={this.toggleCollapse.bind(this)} activeClassName="active">Home</IndexLink>
                </li>
                <li>
                  <Link to="/filme" onClick={this.toggleCollapse.bind(this)} activeClassName="active">Filme</Link>
                </li>
                <li>
                  <Link to="/manage" onClick={this.toggleCollapse.bind(this)} activeClassName="active">Manage</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
