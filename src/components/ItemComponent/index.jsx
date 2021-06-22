

export const ItemComponent = ({item}) => {

    return(
        <>
        <div id={item.id} className="card mb-3 mx-auto" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4" style={{width: "150px"}}>
                    <img src={item.pictureUrl} className="img-fluid rounded-start" alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">Descripcion...</p>
                        <p className="card-text"><small className="text-muted">$ {item.price}</small></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}