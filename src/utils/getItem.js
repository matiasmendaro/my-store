
let itemProducto =
    {
        "id": 5,
        "title": "Camiseta Seleccion Adidas",
        "price": 9999.99,
        "pictureUrl": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6d85036726614f5a9b69ab7d014920bf_9366/Camiseta_Titular_Seleccion_Argentina_Blanco_FS6565_01_laydown.jpg",
        "description": "La camiseta que representa un país que vive y respira fútbol, refleja la unión que genera en todo el mundo tanto en el juego como en los estadios y en las calles. En nuestro país, de Ushuaia a La Quiaca, el fútbol trasciende las fronteras de cada provincia argentina llegando a cada uno de sus rincones y embanderándonos detrás de nuestro equipo. Con esta camiseta, el escudo siempre en el pecho. Ahora con tecnología HEAT.RDY para mantenerte con alto rendimiento en todo momento."
    }


export const getItem = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let item = itemProducto;
            if (item)
                resolve(item)
            else
                reject("getItem => error al traer el item")
        }, 2000);
    });
}
