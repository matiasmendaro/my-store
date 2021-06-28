import { ItemCountComponent } from './../ItemCountComponent/index';

export const ItemDetailComponent = ({item}) => {

    const onAdd = (cantidad) => {
        alert(`se agregaron ${cantidad} items del producto`);
    }

    return(
        <>
        <div className="card mb-3 mx-auto" style={{maxWidth: "1000px"}}>
            <div className="row g-0">
                <div className="col-md-4" style={{width: "330px"}}>
                <img src={item.pictureUrl} className="img-fluid rounded-start" alt="" />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text"><small className="text-muted">$ {item.price}</small></p>
                    <br />
                    <ItemCountComponent stock={5} initial={1} onAdd={onAdd} />
                </div>
                </div>
            </div>
        </div>
        </>
    )
}