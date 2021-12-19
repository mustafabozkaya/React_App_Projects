import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Badge,
  NavItem,
} from "reactstrap";

export default class CartList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  empty_cart = () => {
    return (
      <UncontrolledDropdown inNavbar nav>
        <DropdownToggle nav>Empity</DropdownToggle>
      </UncontrolledDropdown>
    );
  };

  cart_review = () => {
    return (
      <UncontrolledDropdown inNavbar nav>
        <DropdownToggle caret nav>
          Your Carts ({this.props.carts.length})
        </DropdownToggle>
        <DropdownMenu end>
          {this.props.carts.map((item, index) => (
            <DropdownItem key={index}>
              {item.product.productName}
              {"    "}
              <Badge color="danger"> {item.quantity}</Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };
  render() {
    return this.props.carts.length !== 0
      ? this.cart_review()
      : this.empty_cart();
  }
}
