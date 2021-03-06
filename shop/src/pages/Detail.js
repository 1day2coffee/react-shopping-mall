import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';

function Detail(props) {

    useEffect(() => {
        let alertTimer = setTimeout(() => { setAlert(false) }, 2000)
        let timer = setTimeout(() => { setFade('end') }, 100)

        if (isNaN(input) === true) {
            alert('경고: 숫자만 입력하세요.')
        }

        return () => {
            clearTimeout(alertTimer, timer)
            setFade('')
        }

    }, [props])


    let { id } = useParams();
    let [alert, setAlert] = useState(true);
    let [input, setInput] = useState('');
    let [tab, changeTab] = useState(0);
    let [fade, setFade] = useState()

    return (
        <div className={`start ${fade}`}>
            <div className="container">
                {
                    alert === true ?
                        <div className="alert alert-warning" >2초이내 구매 시 할인</div>
                        : null
                }

                <div className="row">
                    <div className="col-md-6">
                        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{props.shoes[id].title}</h4>
                        <input onChange={(e) => { setInput(e.target.valus) }} />
                        <p>{props.shoes[id].content}</p>
                        <p>{props.shoes[id].price} 원</p>
                        <button className="btn btn-danger">주문하기</button>
                    </div>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => { changeTab(0) }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { changeTab(1) }} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => { changeTab(2) }} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContents tab={tab} />
        </div>

    )

}

function TabContents({ tab }) {

    let [fade, setFade] = useState()

    useEffect(() => {
        let timer = setTimeout(() => { setFade('end') }, 100)

        return () => {
            clearTimeout(timer)
            setFade('')
        }
    }, [tab])

    return (<div className={`start ${fade}`}>
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>)
}

export default Detail;