/** Controllers */
import Home from '../controllers/index.controller';
import Posts from '../controllers/posts.controller';

let content = document .querySelector( '#root' );

const router = ( route ) => {
    console .log( 'Route', route );

    /** Limpia la vista (el elemento) cada que una ruta es solicitada */
    content .innerHTML = '';       

    switch( route ) {
        case '#/': {
            return content .appendChild( Home() );     // Agrega el contenido a la vista
        }
        case '#/products':
            return console .log( `Products Page` );    
        case '#/posts': {
            return content .appendChild( Posts() );    // Agrega el contenido a la vista
        }
        default: 
            return console .log( `404 Page!!!` );
    }
}

export { router };