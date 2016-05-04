import React,{Component} from 'react';
import {Navbar, Nav, Col, Grid, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <Navbar className="navbar-custom" inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#"><i className="fa fa-home"></i> Seach app</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={4} href="#/">Search</NavItem>
                        <NavItem eventKey={4} href="#/search/annimal">Search test 1</NavItem>
                        <NavItem eventKey={4} href="#/search/lion">Search test 2</NavItem>
                        <NavItem eventKey={4} href="https://github.com/thanhtungdp/redux-500api"><i className="fa fa-github"></i> Github</NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
