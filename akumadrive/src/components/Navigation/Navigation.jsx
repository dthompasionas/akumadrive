import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { useState } from "react";

const Navigation = () => {
  const [newItem, setNewItem] = useState("");
  console.log(newItem);

  return (
    <>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            AkumaDrive
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/browse">
                Browse
              </Nav.Link>
              <Nav.Link as={Link} to="/recommendations">
                Recommendations
              </Nav.Link>
              <Nav.Link as={Link} to="/sign_in">
                Sign in
              </Nav.Link>
              <Nav.Link as={Link} to="/profile" disabled>
                Link
              </Nav.Link>
              <Nav.Link as={Link} to="/sign_up" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
