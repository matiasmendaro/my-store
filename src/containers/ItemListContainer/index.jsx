import { useEffect, useState } from 'react';
import { getData } from '../../utils/getData';
import { ItemListComponent } from '../../components/ItemListComponent';
import { LoaderComponent } from './../../components/LoaderComponent';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        const waitForData = async () => {
            let data = await getData();
            let productsFiltered = id !== undefined ? data.filter(x => x.category === id) : data;
            setProductos(productsFiltered);
        }
        
        waitForData();
    }, [id]);

    
    return(
        <>
        {productos.length > 0 ? <ItemListComponent items={productos} /> : <LoaderComponent/> }
        </>
    )
}