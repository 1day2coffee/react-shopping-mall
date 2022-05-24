import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { shoesData } from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/detail.js';
import axios from 'axios';

function App() {

  let [shoes, setShoes] = useState(shoesData);
  let [countButton, setCountButton] = useState(0);
  let [pageNumber, setPageNumber] = useState(2);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">개발자 Hub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>홈</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }} >상세페이지</Nav.Link>
            <Nav.Link onClick={() => { navigate('/event') }} >상세페이지</Nav.Link>
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
                })}
              </div>
            </div>
            <button onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data' + pageNumber + '.json')
                .then((result) => {
                  let copy = [...shoes, ...result.data];
                  setShoes(copy);
                  setCountButton(countButton + 1);
                  setPageNumber(pageNumber + 1)
                })
                .catch(() => {
                  console.log('실패');
                })
            }}>더보기</button>
          </div>
        </div>} />

        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="*" element={<div>없는 페이지 </div>} />

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />

        </Route>
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

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
