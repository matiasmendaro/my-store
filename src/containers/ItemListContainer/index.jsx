import { ItemCountComponent } from './../../components/ItemCountComponent/index';

export const ItemListContainer = ({greeting}) => {

    const onAdd = (cantidad) => {
        alert(`se agregaron ${cantidad} items del producto`);
    }

    return(
        <>
        <div style={{color: 'blue'}}>
            <p>{greeting}</p>
        </div>
        <ItemCountComponent stock={5} initial={1} onAdd={onAdd} />
        </>
    )
}