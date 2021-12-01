import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form, FormControl, Navbar } from "react-bootstrap";

function TopBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Song Search Engine</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopBar;