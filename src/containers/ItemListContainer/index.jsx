import { useEffect, useState } from 'react';
import { getData } from '../../utils/getData';
import { ItemListComponent } from '../../components/ItemListComponent';

export const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        const waitForData = async () => {
            let data = await getData();
            setProductos(data);
        }
        
        waitForData();
    }, []);


    if (productos.length > 0) {
        console.log(productos);
    }

    return(
        <ItemListComponent items={productos} />
    )
}