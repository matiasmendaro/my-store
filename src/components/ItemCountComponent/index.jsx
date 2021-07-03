import { useState } from 'react'

export const ItemCountComponent = ({stock, initial, onAdd}) => {

    const initValue = initial <= stock ? initial : stock;
    const [count, setCount] = useState(initValue);

    return(
        <>
        <div className="container">
            <p>Disponibles: {stock}</p>
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" id="button-addon1" disabled={count === 0} onClick={() => { setCount(count - 1) }}>-</button>
                <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" readOnly value={count} />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" disabled={count === stock} onClick={() => { setCount(count + 1) }}>+</button>
            </div>
            <button type="button" className="btn btn-primary" disabled={stock === 0 || count === 0} onClick={() => {onAdd(count)}}>Agregar al carrito</button>
        </div>
        </>
    )

} 