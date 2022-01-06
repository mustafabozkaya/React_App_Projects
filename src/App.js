//import logo from './logo.svg';
//import './App.css';

import Nav from "./Nav";
import Cat from "./Category";
import Pro from "./Productlist";
import Error from "./Error";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import { Row, Col } from "reactstrap";
import Formuser from "./Form";

import React, { Component } from "react";
import alertfy from "alertifyjs";
import { Routes, Route, Link } from "react-router-dom";

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
              baseUrl={this.baseUrl}
              click={this.onclic}
              info={CategoryHead}
              currentcat={this.state.currentcategory}
            />
          </Col>

          <Col xs="8">
            <Routes>
              <Route
                path="/homeproducts"
                element={
                  <Pro
                    info={ProductHead}
                    products={this.state.products}
                    currentcat={this.state.currentcategory}
                    addchart={this.add_chart}
                  />
                }
              />
              <Route
                path="/carts"
                element={
                  <CartList
                    carts={this.state.carts}
                    remove={this.remove_cart}
                  />
                }
              />

              <Route path="/err-404" element={<Error />} />
              <Route path="/formuser" element={<Formuser />} />
            </Routes>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 4, offset: 3 }}></Col>
        </Row>
      </div>
    );
  }
  componentDidMount() {
    this.get_products(this.baseUrl + "/products");
  }
}
