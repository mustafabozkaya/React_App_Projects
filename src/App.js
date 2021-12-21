//import logo from './logo.svg';
//import './App.css';

import Nav from "./Nav";
import Cat from "./Category";
import Pro from "./Productlist";
import { Row, Col } from "reactstrap";

import React, { Component } from "react";
import alertfy from "alertifyjs";

export default class App extends Component {
  state = {
    currentcategory: "",
    products: [],
    carts: [],
  };
  remove_cart = (pro) => {
    let newcart = this.state.carts.filter(
      (cartitem, index) => cartitem.product.id !== pro.id
    );
    this.setState({ carts: newcart });
    alertfy.error(pro.productName + " removed from chart..", 2);
  };
  add_chart = (pro) => {
    let ncarts = this.state.carts;
    var is_order = ncarts.find((card) => card.product.id === pro.id);

    if (is_order) {
      is_order.quantity += 1;

      console.log(is_order);
    } else {
      ncarts.push({ product: pro, quantity: 1 });
    }

    this.setState({ carts: ncarts });
    console.log("carts_state ::");
    ncarts.forEach((c) => console.log(c));

    alertfy.success(pro.productName + " add to chart..", 2);
    // alertfy.alert("ADD", "Alert Message!", function () {
    //   alertfy.success(pro.productName + " add to chart..", 2);
    // });
  };
  get_products = (category) => {
    var url = "http://localhost:3000/products";
    if (category.seoUrl) {
      url = url + "?categoryId=" + category.id;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  onclic = (category) => {
    //alert("you clicked " + category.items);
    this.setState({
      currentcategory: category,
    });
    //alert(category.categoryName);
    this.get_products(category);
  };

  render() {
    const brand = "First React Apps";
    let CategoryHead = "Categories";
    let ProductHead = "Products";

    return (
      <div>
        <Row>
          <Nav
            brand={brand}
            cart={this.state.carts}
            removeCart={this.remove_cart}
          />
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
              addchart={this.add_chart}
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
