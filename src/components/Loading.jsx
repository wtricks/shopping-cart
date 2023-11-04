// eslint-disable-next-line react/prop-types
export default function Loader({ active }) {
    if (!active) {
        return null
    }

    return (
        <div className="loader">
            <span></span>
        </div>
    )
}