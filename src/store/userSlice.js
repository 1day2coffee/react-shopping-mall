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

export default user