# MyStore

Este proyecto es un ecommerce para un nicho general, al estilo mercado libre. 
La aplicación contiene un catálogo de productos, donde se puede filtrar por categorías. 
También se puede visualizar el detalle de un producto específico, para ver informacion extra que no muestra el catálogo. Desde aquí tambien se pueden agregar productos a un carrito de compras.



## Construido con 🛠️

Creado con la librería React


## Dependencias Extra

Se utiliza la dependencia de Bootstrap 5 por npm, para la apariencia del sitio. 


## Ideas o Enfoque

La arquitectura de la aplicacion esta dividida en Componentes Contenedores y Componentes de Presentación. 
Los Componentes Contenedores se encargan de realizar solicitudes de datos y de la lógica, retornando Componentes de Presentacion, los cuales se encargan específicamente de mostrar datos.
Para realizar la solicitud de datos, utilicé fetch con async/await, apuntando a un método con un setTimeout para simular una demora de 2 segundos en la respuesta, como si se tratara de una api real, que devuelve un array de objetos de productos.
Mientras se traen los products se visualiza un loader, para indicar que los productos se mostrarán a la brevedad.  
Una vez obtenidos los productos, se muestran en un catálogo, utilizando un Map para recorrer el array y retornar cada objeto de producto con sus datos. 




⌨️ con ❤️ por [matiasmendaro](https://github.com/matiasmendaro) 😊