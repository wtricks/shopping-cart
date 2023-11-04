import { createSlice } from "@reduxjs/toolkit";

export const Route = createSlice({
    name: 'route',
    initialState: 'home',
    reducers: {
        route(_state, { payload }) {
            return payload == 'home' ? 'home' : 'cart'
        }
    }
})

export const { route } = Route.actions
export default Route.reducer