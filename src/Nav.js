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

import CartList from "./CartList";

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
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <CartList
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
