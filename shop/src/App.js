import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import { shoesData } from './data.js';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './pages/detail.js';

function App() {

  let [shoes] = useState(shoesData);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">개발자 Hub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>홈</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail')}} >상세페이지</Nav.Link>
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
                  )})}
              </div>
            </div>
          </div>
        </div>} />

        <Route path="/detail" element={<Detail/>} />
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



export default App;
