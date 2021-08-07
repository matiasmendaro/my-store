import { useContext, useState, useEffect } from "react"
import { CartContext } from './../../context/CartContext';
import { Link } from 'react-router-dom';
import { HeaderComponent } from './../../components/HeaderComponent/index';


export const CheckoutContainer = () => {

    const { cart, removeItem, totalPrice, clearCart, order, setOrder, createOrder } = useContext(CartContext);

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
            <HeaderComponent />
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
                        <th>$ {totalPrice.toFixed(2)}</th>
                        <th><button type="button" className="btn btn-danger" onClick={() => {clearCart()}}>Eliminar Todo</button></th>
                    </tr>
                </tfoot>
            </table>

            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="name" onInput={(e) => {setOrder({...order, name: e.target.value})}} />
                </div>
                <div className="col">
                    <input type="phone" className="form-control" placeholder="phone" onInput={(e) => {setOrder({...order, phone: e.target.value})}} />
                </div>
                <div className="col">
                    <input type="email" className="form-control" placeholder="email" onInput={(e) => {setOrder({...order, email: e.target.value})}} />
                </div>
                <div className="col">
                    <button type="button" className="btn btn-success" onClick={() => {createOrder()}}>Comprar</button>
                </div>
            </div>
           
        </div>
    )
}