import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

export let { changeName, countUpAge } = user.actions

let stock = createSlice({
    name: 'stock',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        countUpStock(state, action) {
            let productId = state.findIndex((a)=>{return a.id === action.payload})
            state[productId].count++
        }
    }
})

export let { countUpStock } = stock.actions


export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer
    }
}) 