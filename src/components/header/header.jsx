import React from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


export default function(){
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home" >DasoN</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-between">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav>
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/about">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}