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
          <div className='product'>
            {shoes.map(function (a, i) {
              return (
                <Card shoes={shoes[i]} i={i + 1}></Card>
              )
            })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
