import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {

    useEffect(() => {
        let alertTimer = setTimeout(() => { setAlert(false) }, 2000)
        return () => {
            clearTimeout(alertTimer)
        }
    }, [])


    let { id } = useParams();
    let [alert, setAlert] = useState(true);

    return (
        <div>
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
                        <p>{props.shoes[id].content}</p>
                        <p>{props.shoes[id].price} 원</p>
                        <button className="btn btn-danger">주문하기</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Detail;