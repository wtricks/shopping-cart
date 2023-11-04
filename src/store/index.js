import { configureStore } from '@reduxjs/toolkit'
import Route from './route'
import Product from './product'
import Cart from './cart'

export const store = configureStore({
    reducer: {
        route: Route,
        product: Product,
        cart: Cart
    }
})