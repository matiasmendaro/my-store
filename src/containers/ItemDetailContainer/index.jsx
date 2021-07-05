import { useEffect, useState } from 'react';
import { getData } from '../../utils/getData';
import { ItemDetailComponent } from '../../components/ItemDetailComponent';
import { LoaderComponent } from './../../components/LoaderComponent';
import { useParams, useLocation } from 'react-router-dom';

export const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState({});
    const { id } = useParams();
    const location = useLocation();
    console.log(location.pathname);
    
    useEffect(() => {
        const waitForData = async () => {
            let data = await getData();
            let productFiltered = data.find(x => x.id === parseInt(id));
            setItemDetail(productFiltered);
        }
        
        waitForData();
    }, [id]);
    

    return(
        <>
        { Object.keys(itemDetail).length > 0 ? <ItemDetailComponent item={itemDetail}/> : <LoaderComponent/> }
        </>
    )
}