import React from 'react';
import * as RB from 'react-bootstrap'
require('../main.scss')
export default class GlobalTopNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <RB.Navbar inverse fixedTop className="wtg-navbar-override" >
        <RB.Navbar.Header>
          <RB.Navbar.Brand pullLeft="true">
            <a href="#" className="wtg-nav-link">We The Gamer</a>
          </RB.Navbar.Brand>
          <RB.Navbar.Toggle />
        </RB.Navbar.Header>
        <RB.Navbar.Collapse>
          <RB.Nav>
            <RB.NavItem eventKey={1} href="#" className="wtg-nav-link">For Business</RB.NavItem>
            <RB.NavItem eventKey={2} href="#" className="wtg-nav-link">For Gamers</RB.NavItem>
          </RB.Nav>
        </RB.Navbar.Collapse>
      </RB.Navbar>

    );
  }
}
// <RB.NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//   <RB.MenuItem eventKey={3.1}>Action</RB.MenuItem>
//   <RB.MenuItem eventKey={3.2}>Another action</RB.MenuItem>
//   <RB.MenuItem eventKey={3.3}>Something else here</RB.MenuItem>
//   <RB.MenuItem divider />
//   <RB.MenuItem eventKey={3.3}>Separated link</RB.MenuItem>
// </RB.NavDropdown>
