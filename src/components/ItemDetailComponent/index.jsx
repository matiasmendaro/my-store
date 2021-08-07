import { ItemCountComponent } from './../ItemCountComponent/index';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './../../context/CartContext';
import { HeaderComponent } from './../HeaderComponent/index';

export const ItemDetailComponent = ({item}) => {
    const [cartQuantity, setCartQuantity] = useState(0);
    const { addItem, stockInCart } = useContext(CartContext);

    const onAdd = (cantidad) => {
        //alert(`se agregaron ${cantidad} items del producto`);
        setCartQuantity(cantidad);

        addItem(item, cantidad);
    }

    return(
        <>
        <div className="container py-5">
             <HeaderComponent />
            <div className="card mb-3 mx-auto border-primary" style={{maxWidth: "1000px"}}>
                <div className="row g-0">
                    <div className="col-md-4" style={{width: "330px"}}>
                    <img src={item.pictureUrl} className="img-fluid rounded-start" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <h4 className="text-muted">$ {item.price}</h4>
                            <br />
                            {cartQuantity === 0 ? <ItemCountComponent stock={item.stock - stockInCart(item.id)} initial={1} onAdd={onAdd} /> : <Link to={"/cart"}><button type="button" className="btn btn-success">Termina tu compra</button> </Link>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}