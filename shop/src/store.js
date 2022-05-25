import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initalState:'kim'
})

export default configureStore({
  reducer: {
    user : user.reducer
   }
}) 