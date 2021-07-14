import { useContext } from "react"
import { CartContext } from './../../context/CartContext';
import { Link } from 'react-router-dom';


export const CheckoutContainer = () => {

    const { cart, removeItem, totalPrice } = useContext(CartContext);

    if (cart.length == 0) {
        return (
            <div className="container py-5">
                <p>NO HAY ITEMS EN EL CARRITO</p>
                <Link to={'/'}><button type="button" className="btn btn-primary">Volver</button></Link>
            </div>
        )
    }

    return(
        <div className="container py-5">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio Por Unidad</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((producto, index) => {
                        return(
                            <tr key={index}>
                                <td>
                                    <img height="50" width="50" className="img" src={producto.item.pictureUrl} alt="" />
                                    {' ' + producto.item.title}
                                </td>
                                <td className="align-middle">{producto.item.price}</td>
                                <td className="align-middle">{producto.quantity}</td>
                                <td className="align-middle">
                                    <button type="button" className="btn btn-danger" onClick={() => { removeItem(producto.item.id) }}>Eliminar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Precio Total</th>
                        <th></th>
                        <th></th>
                        <th>$ {totalPrice.toFixed(2)}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}