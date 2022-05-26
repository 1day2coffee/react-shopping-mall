import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: { name: 'kim', age: 20 },
    reducers: {
        changeName(state) {
            state.name = 'park'
        },
        countUpAge(state, action) {
            state.age += action.payload
        }
    }
})

export let { changeName, countUpAge } = user.actions

let stock = createSlice({
    name: 'stock',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {

        countUpStock(state) {
            return state[0].count += 1
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