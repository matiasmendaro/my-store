import { Link } from 'react-router-dom';

export const ItemComponent = ({item}) => {

    return(
        <>
        <div id={item.id} className="card mb-3 mx-auto border-primary" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4" style={{width: "150px"}}>
                    <img width="150" height="150" src={item.pictureUrl} className="img-fluid rounded-start" alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text"></p>
                        <div className="row g-0">
                            <div className="col-md-6 align-bottom"><p className="card-text"><small className="text-muted">$ {item.price}</small></p></div>
                            <div className="col-md-6 text-end"><Link to={`/item/${item.id}`}><button type="button" className="btn btn-primary">Ver Detalle</button></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}