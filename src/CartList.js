import React, { Component } from "react";
import { Button, Table } from "reactstrap";

class CartList extends Component {
  constructor(props) {
    super(props);
  }

  render_cart() {
    return (
      <div className="container-md">
        <Table hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>categoryId</th>
              <th>productName</th>
              <th>quantityPerUnit</th>
              <th>unitPrice($)</th>
              <th>unitsInStock</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.carts.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.product.categoryId}</th>
                <td>{item.product.productName}</td>
                <td>{item.product.quantityPerUnit}</td>
                <td>{item.product.unitPrice}</td>
                <td>{item.product.unitsInStock}</td>
                <td>
                  <Button
                    outline
                    color="danger"
                    onClick={() => this.props.remove(item.product)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }

  render() {
    return (
      <div className="container-md">
        <Table hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>categoryId</th>
              <th>productName</th>
              <th>quantityPerUnit</th>
              <th>unitPrice($)</th>
              <th>unitsInStock</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.carts.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index}</th>
                <th>{item.product.categoryId}</th>
                <td>{item.product.productName}</td>
                <td>{item.product.quantityPerUnit}</td>
                <td>{item.product.unitPrice}</td>
                <td>{item.product.unitsInStock}</td>
                <td>{item.quantity}</td>
                <td>
                  <Button
                    outline
                    color="danger"
                    onClick={() => this.props.remove(item.product)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CartList;
