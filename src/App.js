//import logo from './logo.svg';
//import './App.css';

import Nav from "./Nav";
import Cat from "./Category";
import Pro from "./Product";
import { Button, Row, Col } from "reactstrap";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    currentcategory: " current state on apps component",
  };

  onclic = (prob) => {
    //alert("you clicked " + category.items);
    this.setState({
      currentcategory: prob.categoryName,
    });
  };
  render() {
    const brand = "First React Apps";
    let CategoryHead = "Categors List";
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
            <Pro info={ProductHead} currentcat={this.state.currentcategory} />
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 4, offset: 3 }}></Col>
        </Row>
      </div>
    );
  }
}
