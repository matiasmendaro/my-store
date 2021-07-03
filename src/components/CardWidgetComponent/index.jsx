import { Link } from 'react-router-dom';

export const CardWidgetComponent = () => {
    return( 
        <Link to={'/'} className="navbar-brand">
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" width="50" height="50" />
            myStore
        </Link>
    )
}