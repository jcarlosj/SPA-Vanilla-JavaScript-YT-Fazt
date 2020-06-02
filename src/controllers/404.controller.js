import view from '../views/404.html';

const NotFound = async () => {

    const el = document .createElement( 'main' );   // Crea elemento contenedor (convertira el String en Elementos HTML)
    
    el .classList = 'page page-posts';   // Agrega clases al elemento principal de la vista
    el .innerHTML = view;               // Anida el contenido del String dentro del nuevo elemento 'main' 

    return el;
}


export default NotFound;