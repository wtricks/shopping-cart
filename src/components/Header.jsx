import { useDispatch, useSelector } from "react-redux"
import { route as change } from '../store/route'

export default function Header() {
    const route = useSelector(state => state.route)
    const dispatch = useDispatch()

    const onLinkClick = (event) => {
        event.preventDefault()
        dispatch(change(event.target.dataset.route))
    }

    return (
        <header className="header">
            <div className="inner">
                <a href="/" className="logo">
                    <span>Shopping Cart</span>
                </a>

                <nav className="navbar">
                    <ul>
                        <li>
                            <a
                                onClick={onLinkClick}
                                data-route='home'
                                href="/"
                                className={route == 'home' ? 'active' : ''}
                            >
                                Home Page
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={onLinkClick}
                                data-route='cart'
                                href="/cart"
                                className={route != 'home' ? 'active' : ''}
                            >
                                Cart Page
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}