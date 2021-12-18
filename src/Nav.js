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
    };
  }

  changestate = () => {
    this.setState({ brand: "E-TRADİNG APP" });
  };

  render() {
    return (
      <div>
        <Navbar color="warning" expand="md" fixed="false" light>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <CartList carts={this.props.cart} />
            </Nav>
            <NavbarText>
              <Button color="warning">CARTS ({this.props.cart.length})</Button>
            </NavbarText>
            <Dropdown toggle={function noRefCheck() {}}>
              <DropdownToggle color="warning" caret></DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
