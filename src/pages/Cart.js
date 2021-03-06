import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, countUpAge } from './../store/userSlice.js'
import { countUpStock } from './../store.js'
function Cart() {

    let state = useSelector((state) => state)
    let dispatch = useDispatch();

    return (
        <div>

            {state.user.name} {state.user.age}의 장바구니
            <button onClick={() => {
                dispatch(countUpAge())
            }}>버튼</button>
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
                                    dispatch(countUpStock(state.stock[i].id))
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