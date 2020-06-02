/** Controllers */
import controller from '../controllers/index';

let content = document .querySelector( '#root' );

const router = async ( route ) => {
    console .log( 'Route', route );

    /** Limpia la vista (el elemento) cada que una ruta es solicitada */
    content .innerHTML = '';       

    switch( route ) {
        case '#/': {
            return content .appendChild( controller .home() );     // Agrega el contenido a la vista
        }
        case '#/products':
            return console .log( `Products Page` );    
        case '#/posts': {
            return content .appendChild( await controller .posts() );    // Agrega el contenido a la vista
        }
        default: 
            return console .log( `404 Page!!!` );
    }
}

export { router };