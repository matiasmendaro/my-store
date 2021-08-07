import { useLocation, useHistory } from 'react-router-dom';

export const HeaderComponent = () => {

    const location = useLocation();
    const history = useHistory();
    console.log(location.pathname);

    if (location.pathname !== '/') {
        return( 
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6" style={{display: 'flex', alignItems: 'center'}}>
                            <h1 style={{cursor: 'pointer'}}><a onClick={() => {history.goBack()}} style={{marginRight: 10}}><i className="bi bi-arrow-left-circle-fill"></i></a></h1>
                            <p className="card-text breadcrumb-item active">{location.pathname}</p>
                        </div>
                        <div className="col-sm-6">
                        </div>
                    </div>
                </div>
            </section>
        )
    }
   

    return(
        <>
        </>
    )
}