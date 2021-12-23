import React, { Component } from "react";
import {
  Nav,
  NavbarToggler,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Navbar,
  NavbarBrand,
  Collapse,
  NavItem,
  NavLink,
  NavbarText,
  Button,
  Dropdown,
} from "reactstrap";

import Cartsummary from "./CartSummary";
import { Link } from "react-router-dom";
export default class Navi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: this.props.brand,
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  changestate = () => {
    this.setState({ brand: "E-TRADİNG APP" });
  };

  render() {
    return (
      <div className="container">
        <Navbar color="warning" expand="md" fixed="True" light>
          <NavbarBrand href="/">E -Trading App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse
            className=" justify-content-end"
            isOpen={this.state.isOpen}
            navbar
          >
            <Nav className="ml-auto " navbar>
              <NavItem>
                <NavLink>
                  <Link to="formuser">Log in</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/formuser">Log in</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/faq"
                  className={(isActive) =>
                    "nav-link" + (!isActive ? " unselected" : "")
                  }
                >
                  FAQs
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink strict to="/events/">
                  Events
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <Cartsummary
                carts={this.props.cart}
                remove={this.props.removeCart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
