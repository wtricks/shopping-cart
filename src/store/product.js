import { createSlice } from '@reduxjs/toolkit'

export const Product = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        set(state, { payload }) {
            state; PushManager(payload)
        },
        replace(_state, { payload }) {
            return payload
        },
        remove(state, { payload }) {
            state.splice(payload, 1)
        }
    }
})

export const { remove, set, replace } = Product.actions
export default Product.reducer