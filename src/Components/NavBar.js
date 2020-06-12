import React, {Component} from 'react'
import { default as BSNavBar} from 'react-bootstrap/Navbar'
import {default as BSNav} from 'react-bootstrap/Nav'

class NavBar extends Component {
    render() {
        return (
            <BSNavBar bg="dark" collapseOnSelect>
                <BSNavBar.Brand href="/" style={{color: "white"}}>ExerTracker</BSNavBar.Brand>
                <BSNavBar.Collapse >
                    <BSNav className="mr-auto">
                        <BSNav.Link href="/" style={{color: "lightgray"}}>Exercises</BSNav.Link>
                        <BSNav.Link href="/create" style={{color: "lightgray"}}>Create Exercise Log</BSNav.Link>
                        <BSNav.Link href="/user" style={{color: "lightgray"}}>Create User</BSNav.Link>
                    </BSNav>
                </BSNavBar.Collapse>
            </BSNavBar>
        );
    }
}

export default NavBar