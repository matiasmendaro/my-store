
import { useParams } from 'react-router-dom';
import { ItemComponent } from './../ItemComponent/index';

export const ItemListComponent = ({items}) => {
    const id = useParams();
    return(
        <div className="container py-5">
        
            {items.map((producto, index) => {
                return(
                    <ItemComponent key={index} item={producto} />
                )
            })}
        </div>
    )
}