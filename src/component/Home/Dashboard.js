import React, { Component } from "react";
import Cat from "../Category/Category";
import Pro from "../../Productlist";
import { Row, Col } from "reactstrap";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row>
          <Col md="3">
            <Cat
              baseUrl={this.props.baseUrl}
              click={this.props.click}
              info={this.props.info.cat}
              currentcat={this.props.currentcat}
            />
          </Col>
          <Col md="9">
            <Pro
              info={this.props.info.pro}
              products={this.props.products}
              currentcat={this.props.currentcat}
              addchart={this.props.addchart}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
