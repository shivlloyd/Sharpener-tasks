import { useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Cart from "./cart/Cart";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = ()=>{
    setShowCart(!showCart)
  }

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">My E-commerce Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="store">Store</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Button onClick={showCartHandler}>Cart</Button>
      </Navbar>
      {showCart && <Cart showCartHandler={showCartHandler}></Cart>}
    </header>
  );
};

export default Header;
