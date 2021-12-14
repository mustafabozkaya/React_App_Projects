import React, { Component } from 'react';
import { Nav,NavbarToggler,DropdownItem,DropdownMenu,DropdownToggle
     ,Navbar,NavbarBrand,Collapse,
     NavItem, NavLink,
    UncontrolledDropdown,NavbarText} from 'reactstrap';



export default class Navi extends Component {

  
  constructor(props) {
    super(props);

    this.state={
      brand :this.props.brand
    }
  }
  
  changestate=()=>{

    this.setState({brand:"new React Apps"})

  }

  
    render() {
        return (
            <div>
            <Navbar
              color="light"
              expand="md"
              light
            >
              <NavbarBrand  onClick={this.changestate} href="/">
                {this.state.brand}
              </NavbarBrand>
              <NavbarToggler onClick={this.changestate} />
              <Collapse navbar>
                <Nav
                  className="me-auto"
                  navbar
                >
                  <NavItem>
                    <NavLink href="/components/">
                      Components
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">
                      GitHub
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown
                    inNavbar
                    nav
                  >
                    <DropdownToggle
                      caret
                      nav
                    >
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <NavbarText>
                  Simple Text
                </NavbarText>
              </Collapse>
            </Navbar>
          </div>
            
        );
    }
}
