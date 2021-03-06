import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        <DropdownMenu>
          {this.props.carts.map((item, index) => (
            <DropdownItem key={index}>
              <Badge
                color="danger"
                onClick={() => this.props.remove(item.product)}
              >
                {" X "}
              </Badge>
              {item.product.productName}
              {"    "}
              <Badge color="success"> {item.quantity} </Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>
            <Link to="carts"> GoTo Cart list</Link>
          </DropdownItem>
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
