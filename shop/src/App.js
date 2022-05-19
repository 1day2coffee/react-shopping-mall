import logo from './logo.svg';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import './App.css';
import { useState } from 'react';
import shoesData from './data.js';

function App() {

  let [shoes] = useState(shoesData);

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">개발자 Hub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>
      <div className="container">
        <div className="row">
          <Product></Product>
        </div>
      </div>
    </div>
  );
}

function Product(props) {
  return (
    <div className='product'>
      <div className="col-md-4">
        <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
        <h4>상품명</h4>
        <p>상품내용</p>
        <p>상품가격</p>
      </div>

    </div>

  )
}

export default App;
