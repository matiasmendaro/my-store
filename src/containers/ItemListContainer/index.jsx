import { useEffect, useState } from 'react';
import { getData } from '../../utils/getData';
import { ItemListComponent } from '../../components/ItemListComponent';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const waitForData = async () => {
            let data = await getData();
            let productsFiltered = data.filter(x => x.category === id);
            setProductos(productsFiltered);
        }
        
        waitForData();
    }, [id]);


    if (productos.length > 0) {
        console.log(productos);
    }

    return(
        <ItemListComponent items={productos} />
    )
}