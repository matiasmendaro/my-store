import { useEffect, useState } from 'react';
import { ItemListComponent } from '../../components/ItemListComponent';
import { LoaderComponent } from './../../components/LoaderComponent';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/client';

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const { id } = useParams();
    
    const getProducts = async () => {
        const DB = getFirestore();
        const CollectionProductos = DB.collection("productos");
        const RESPONSE = await CollectionProductos.get();
        const data = RESPONSE.docs.map(element => { 
            return { ...element.data(), id: element.id }
        });
        console.log(data);
        setProductos(data);
    }

    const getProductsByCategory = async (idCategory) => {
        const DB = getFirestore();
        const CollectionProductos = DB.collection("productos");
        const FilteredByCategory = CollectionProductos.where('category', '==', idCategory);
        const RESPONSE = await FilteredByCategory.get();
        const data = RESPONSE.docs.map(element => { 
            return { ...element.data(), id: element.id }
        });
        console.log(data);
        setProductos(data);
    }

    useEffect(() => {   
        if (id)
            getProductsByCategory(id);
        else
            getProducts();
    }, [id]);
    
    return(
        <>
        {productos.length > 0 ? <ItemListComponent items={productos} /> : <LoaderComponent/> }
        </>
    )
}