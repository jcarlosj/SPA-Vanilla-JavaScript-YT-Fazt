/** Files CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
import './master.scss';

/** Router */
import { router } from './router/index.routes';

router( window .location .hash );      // Carga por defecto el hash que posea la URL

/** El evento hashchange es ejecutado cuando el fragmento identificador de la URL ha cambiado */
window .addEventListener( 'hashchange', () => {
    //console .log( 'Hash', window .location .hash );     
    router( window .location .hash );                   /** Devuelve una cadena USVString que contiene un '#' seguido del identificador de fragmento de la URL. */
});