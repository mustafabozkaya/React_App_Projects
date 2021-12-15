//import logo from './logo.svg';
//import './App.css';

import Nav from "./Nav";
import Cat from "./Category";
import Pro from "./Productlist";
import { Row, Col } from "reactstrap";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    currentcategory: "",
    products: [],
    carts: [],
  };

  get_products = (seoUrl) => {
    var url = seoUrl;
    if (this.state.currentcategory !== "") {
      url = url + "?categoryId=" + this.state.currentcategory.id;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  onclic = (prob) => {
    //alert("you clicked " + category.items);
    this.setState({
      currentcategory: prob,
    });
    alert(this.state.currentcategory.categoryName);
    this.get_products("http://localhost:3000/products");
  };

  render() {
    const brand = "First React Apps";
    let CategoryHead = "Categories";
    let ProductHead = "Products";

    return (
      <div>
        <Row>
          <Nav brand={brand} />
        </Row>

        <Row>
          <Col xs="4">
            <Cat
              click={this.onclic}
              info={CategoryHead}
              currentcat={this.state.currentcategory}
            />
          </Col>

          <Col xs="8">
            <Pro
              info={ProductHead}
              products={this.state.products}
              currentcat={this.state.currentcategory}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 4, offset: 3 }}></Col>
        </Row>
      </div>
    );
  }
  componentDidMount() {
    this.get_products("http://localhost:3000/products");
  }
}
