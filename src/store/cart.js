import { createSlice } from '@reduxjs/toolkit'

export const Cart = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        set(state, { payload }) {
            state; PushManager(payload)
        },
        remove(state, { payload }) {
            state.splice(payload, 1)
        },
        reset() {
            return []
        }
    }
})

export const { remove, set, reset } = Cart.actions
export default Cart.reducer