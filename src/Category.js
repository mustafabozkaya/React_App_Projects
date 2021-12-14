import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  Badge,
  Row,
  CardHeader,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemcategory: [],
      current: " Reactaps",
    };
  }

  get_categories = (path) => {
    fetch(path)
      .then((response) => response.json())
      .then((data) => this.setState({ itemcategory: data }));
  };
  onmouseover = () => {
    //alert("onmouseover events running");
    this.setState((prevState) => ({
      // eslint-disable-next-line no-sparse-arrays
      itemcategory: [
        ...prevState.itemcategory,
        {
          id: 9,
          categoryName: "Home & Garden",
          seoUrl: "HomeGarden",
        },
      ],
    }));
  };
  static getDerivedStateFromProps(props, state) {
    return { current: props.info };
  }

  render() {
    return (
      //#region
      <div class="container">
        <Row>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="{this}">Home</a>
            </BreadcrumbItem>

            <BreadcrumbItem>{this.state.current}</BreadcrumbItem>
            <BreadcrumbItem active>{this.props.currentcat}</BreadcrumbItem>
          </Breadcrumb>
        </Row>
        <Row>
          <CardHeader>{this.props.info}</CardHeader>
        </Row>
        <ListGroup>
          {this.state.itemcategory.map((category, index) => (
            <ListGroupItem
              onClick={() => this.props.click(category)}
              onMouseOver={this.onmouseover}
              className="justify-content-start"
              key={index}
            >
              {category.categoryName} <Badge pill>{}</Badge>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }

  componentDidMount() {
    this.get_categories("http://localhost:3000/categories");
  }
}

export default Category;
