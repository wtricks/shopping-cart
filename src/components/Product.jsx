export default function Product({ image, id, index, title, price, isAdded, onClick }) {
    return (
        <li>
            <div className="image">
                <img src={image} alt="Product" />
            </div>

            <h5>Title: {title}</h5>
            <p>Price: ${price}</p>

            <button type="button" onClick={() => onClick(id, index)}>
                {isAdded ? 'Remove from Cart' : 'Add to Cart'}
            </button>
        </li>
    )
}