import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { replace } from '../store/product'
import { set } from '../store/cart'
import Product from '../components/Product'
import Loader from "../components/Loading";
import './Home.css'

export default function Home() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const products = useSelector(state => state.product)
    const carts = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const getProduct = () => {
        return products.filter(el => !carts.includes(el.id))
    }

    const onClick = (id) => {
        dispatch(set(id))
    }

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(e => e.json())
            .then(data => {
                dispatch(replace(data.products))
            }).catch(e => setError('An error occured: ' + e.message))
            .finally(() => setLoading(false))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <h1 className="main-heading">All Items</h1>
            {error && <p className="error">{error}</p>}

            <Loader active={loading} />
            <div className="products">
                <ul>
                    {getProduct().map(product => (
                        <Product
                            key={product.id}
                            id={product.id}
                            image={product.thumbnail}
                            title={product.title}
                            isAdded={false}
                            price={product.price}
                            onClick={onClick}
                        />
                    ))}
                </ul>
            </div>
        </>
    )
}