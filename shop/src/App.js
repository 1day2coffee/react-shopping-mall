import logo from './logo.svg';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import './App.css';
import { useState } from 'react';
import shoesData from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  let [shoes] = useState(shoesData);

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">개발자 Hub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link href="/detail">상세페이지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      <Routes>
        <Route path="/" element={<div>
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
        </div>} />

        <Route path="/detail" element={<div>
          <div className="container">
            <Detail />
          </div>
        </div>} />
      </Routes>


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

function Detail(props) {
  return (
    <div className="row">
      <div className="col-md-6">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">상품명</h4>
        <p>상품설명</p>
        <p>120000원</p>
        <button className="btn btn-danger">주문하기</button>
      </div>
    </div>

  )
}

export default App;
