//import logo from './logo.svg';
//import './App.css';

import Nav from "../../Nav";
import Error from "../../Error";
import CartList from "../Cartlist/CartList";
import CartSummary from "../../CartSummary";
import { Row, Col, Container } from "reactstrap";
import Formuser from "../../Form";

import React, { Component } from "react";
import alertfy from "alertifyjs";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";

export default class App extends Component {
  baseUrl = "https://server-backend-api.herokuapp.com";
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
    var url = this.baseUrl + "/products";
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
      <Container md="11">
        <Row>
          <Nav
            brand={brand}
            cart={this.state.carts}
            removeCart={this.remove_cart}
          />
        </Row>

        <Row>
          <Col md="12">
            <Dashboard
              baseUrl={this.baseUrl}
              click={this.onclic}
              info={{ cat: CategoryHead, pro: ProductHead }}
              currentcat={this.state.currentcategory}
              products={this.state.products}
              addchart={this.add_chart}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 4, offset: 3 }}></Col>
        </Row>
      </Container>
    );
  }
  componentDidMount() {
    this.get_products(this.baseUrl + "/products");
  }
}
