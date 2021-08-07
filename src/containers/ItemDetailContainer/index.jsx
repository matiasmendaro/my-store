import { useEffect, useState } from 'react';
import { getData } from '../../utils/getData';
import { ItemDetailComponent } from '../../components/ItemDetailComponent';
import { LoaderComponent } from './../../components/LoaderComponent';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/client';

export const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        const getProduct = async () => {
            const DB = getFirestore();
            const CollectionProductos = DB.collection("productos");
            const RESPONSE = await CollectionProductos.doc(id).get();
            const data = { ...RESPONSE.data(), id: RESPONSE.id };
            console.log(data);
            setItemDetail(data);
        }

        getProduct();
    }, [id]);
    

    return(
        <>
        { Object.keys(itemDetail).length > 0 ? <ItemDetailComponent item={itemDetail}/> : <LoaderComponent/> }
        </>
    )
}