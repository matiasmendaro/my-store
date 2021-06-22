
import { ItemComponent } from './../ItemComponent/index';
export const ItemListComponent = ({items}) => {

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