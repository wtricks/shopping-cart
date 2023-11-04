import { useDispatch, useSelector } from 'react-redux'

import Product from '../components/Product'
import { remove, reset } from '../store/cart'

import './Cart.css'
import { useEffect, useState } from 'react'

export default function Cart() {
    const [product, setProduct] = useState([])
    const products = useSelector(state => state.product)
    const carts = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const onClick = (id,index) => {
        dispatch(remove(carts.findIndex(el => el == id)))
        setProduct(product.filter(el => el.id != id))
        alert('Product \'' + product[index].title + '\' is removed from your cart.')
    }

    const checkout = () => {
        dispatch(reset())
        setProduct([])
        alert('All items have been checkout in $' + product.reduce((p, c) => p + c.price, 0))
    }

    useEffect(() => {
        setProduct(products.filter(el => carts.includes(el.id)))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <h1 className='main-heading'>Cart Page</h1>
            {carts.length == 0 && <p className='error'>Your cart is empty</p>}
            <div className="container">
                <div className="inner">
                    <div className="products">
                        <ul>
                            {product.map((product, index) => (
                                <Product
                                    key={product.id}
                                    id={product.id}
                                    index={index}
                                    image={product.thumbnail}
                                    title={product.title}
                                    isAdded={true}
                                    price={product.price}
                                    onClick={onClick}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="price-card">
                        <h3>Checkout List</h3>
                        <ul>
                            {product.map(pro => (
                                <li key={pro.id}>
                                    <b>{pro.title}</b>
                                    <span>${pro.price}</span>
                                </li>
                            ))}

                            <li>
                                <b>Total</b>
                                <span>${product.reduce((p, c) => p + c.price, 0)}</span>
                            </li>
                        </ul>

                        <button type='button' onClick={checkout}>
                            Click to checkout
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
