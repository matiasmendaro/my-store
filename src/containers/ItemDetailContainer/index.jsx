import { useEffect, useState } from 'react';
import { getItem } from '../../utils/getItem';
import { ItemDetailComponent } from '../../components/ItemDetailComponent';

export const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState([]);
    
    useEffect(() => {
        const waitForData = async () => {
            let item = await getItem();
            setItemDetail(item);
        }
        
        waitForData();
    }, []);


    if (itemDetail) {
        console.log(itemDetail);
    }

    return(
        <ItemDetailComponent item={itemDetail} />
    )
}