
let productos = [
    {
        "id": 1,
        "title": "Zapatillas Nike",
        "price": 14999.99,
        "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_957919-MLA31043392871_062019-W.jpg"
    },
    {
        "id": 2,
        "title": "Campera Columbia Termica",
        "price": 4700,
        "pictureUrl": "https://http2.mlstatic.com/D_NQ_NP_687919-MLA31577112237_072019-O.jpg"
    },
    {
        "id": 3,
        "title": "Short Adidas",
        "price": 1470.55,
        "pictureUrl": "https://sporting.vteximg.com.br/arquivos/ids/206072-1500-1500/ED6285_APP_photo_front-center_white.jpg?v=637255102666000000"
    },
    {
        "id": 4,
        "title": "Pantalon Deportivo Puma",
        "price": 7999.99,
        "pictureUrl": "https://cdn.shopify.com/s/files/1/1161/3498/products/6-8_1_7aa06ce2-e071-439b-af29-afbda3838b6f_large.jpg?v=1620716913"
    },
    {
        "id": 5,
        "title": "Camiseta Seleccion Adidas",
        "price": 99.99,
        "pictureUrl": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6d85036726614f5a9b69ab7d014920bf_9366/Camiseta_Titular_Seleccion_Argentina_Blanco_FS6565_01_laydown.jpg"
    }
]

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = productos;
            if (data)
                resolve(data)
            else
                reject("getData => error al traer los datos")
        }, 2000);
    });
}

