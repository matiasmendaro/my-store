
import { useParams } from 'react-router-dom';
import { ItemComponent } from './../ItemComponent/index';
import { HeaderComponent } from './../HeaderComponent/index';

export const ItemListComponent = ({items}) => {
    const id = useParams();
    return(
        <div className="container py-5">
             <HeaderComponent />
            {items.map((producto, index) => {
                return(
                    <ItemComponent key={index} item={producto} />
                )
            })}
        </div>
    )
}