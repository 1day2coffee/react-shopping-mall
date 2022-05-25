import {Table} from 'react-bootstrap';
import {useSelector} from 'react-redux';

function Cart() {

    let state = useSelector((state)=>state)
    console.log(state.stock);

    return (
        <div>
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
                    <tr>
                        <td>{[...state.stock][0].id}</td>
                        <td>{[...state.stock][0].name}</td>
                        <td>{[...state.stock][0].count}</td>
                        <td>{[...state.stock][0].id}</td> 
                    </tr>
                    <tr>
                        <td>{[...state.stock][1].id}</td>
                        <td>{[...state.stock][1].name}</td>
                        <td>{[...state.stock][1].count}</td>
                        <td>{[...state.stock][1].id}</td> 
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
 export default Cart;