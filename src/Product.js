import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  Button,
  CardColumns,
  CardHeader,
  Row,
} from "reactstrap";
export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemproducts: [
        {
          items: "Productlist items0",
          size: 35413541555555555,
          descrip:
            " This is a wider card with supporting text below as a natural" +
            "lead-in to additional content. This content is a little bit" +
            "longer.",
        },
        {
          items: "Productlist items1",
          size: 35413541555555555,
          descrip:
            " This is a wider card with supporting text below as a natural" +
            "lead-in to additional content. This content is a little bit" +
            "longer.",
        },
        {
          items: "Productlist items3",
          size: 35413541555555555,
          descrip:
            " This is a wider card with supporting text below as a natural" +
            "lead-in to additional content. This content is a little bit" +
            "longer.",
        },
        {
          items: "Productlist items4",
          size: 35413541555555555,
          descrip:
            " This is a wider card with supporting text below as a natural" +
            "lead-in to additional content. This content is a little bit" +
            "longer.",
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <Row>
          <CardHeader>
            {this.props.info}
            ---
            {this.props.currentcat}
          </CardHeader>
        </Row>
        <CardColumns>
          {this.state.itemproducts.map((product, index) => (
            <Card key={index}>
              <CardImg
                alt="Card image cap"
                src="https://picsum.photos/256/186"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">{this.props.info}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {product.items}
                </CardSubtitle>
                <CardText>
                  {product.descrip}
                  <strong>{product.size}</strong>
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          ))}

          <Card
            body
            inverse
            color="success"
            style={{
              backgroundColor: "#fff,",
              borderColor: "#000",
            }}
          >
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Button</Button>
          </Card>
        </CardColumns>
      </div>
    );
  }
}
