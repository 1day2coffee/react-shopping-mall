import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from './../store.js'

function Cart() {

    let state = useSelector((state) => state)
    let dispatch = useDispatch();

    return (
        <div>

            {state.user} 의 장바구니
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.stock.map((a, i) =>
                            <tr key={i}>
                                <td>{state.stock[i].id}</td>
                                <td>{state.stock[i].name}</td>
                                <td>{state.stock[i].count}</td>
                                <td>{state.stock[i].id}</td>
                                <td><button onClick={() => {
                                    dispatch(changeName())
                                }}>+</button></td>
                            </tr>
                        )
                    }


                </tbody>
            </Table>
        </div>
    )
}
export default Cart;