import { useContext } from "react"
import { CartContext } from './../../context/CartContext';
import { Link } from 'react-router-dom';

export const CartWidgetComponent = () => {

    const { totalQuantity } = useContext(CartContext);

    return(
        <Link to={'/cart'}>
            <i className="bi-cart3" style={{fontSize: '2.3rem', color: 'cornflowerblue'}}></i>
            <span className="badge bg-danger rounded-pill align-top">{totalQuantity}</span>
        </Link>
    )
}