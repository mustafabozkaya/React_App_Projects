import React, { Component } from "react";
import { CardHeader, Row, Table } from "reactstrap";
export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemproducts: [],
    };
  }

  render() {
    return (
      <div className="container">
        <Row>
          <CardHeader>
            {this.props.currentcat.id
              ? this.props.info + " / " + this.props.currentcat.categoryName
              : this.props.info}
          </CardHeader>
        </Row>
        <Table hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>categoryId</th>
              <th>productName</th>
              <th>quantityPerUnit</th>
              <th>unitPrice($)</th>
              <th>unitsInStock</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product, index) => (
              <tr key={index}>
                <th scope="row">{product.id}</th>
                <td>{product.categoryId}</td>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
