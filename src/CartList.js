import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Badge,
} from "reactstrap";

export default class CartList extends Component {
  render() {
    return (
      <div>
        <UncontrolledDropdown inNavbar nav>
          <DropdownToggle caret nav>
            Options
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
      </div>
    );
  }
}
