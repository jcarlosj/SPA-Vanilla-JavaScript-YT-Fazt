import view from '../views/index.html';

export default () => {

    const el = document .createElement( 'main' );   // Crea elemento contenedor (convertira el String en Elementos HTML)
    
    el .classList = 'page page-home';   // Agrega clases al elemento principal de la vista
    el .innerHTML = view;               // Anida el contenido del String dentro del nuevo elemento 'main' 

    /** Elemento button on View */
    const $btnClick = el .querySelector( '#btnClick' );
    $btnClick .addEventListener( 'click', () => {
        alert( 'Hola amigo! :)' );
    });

    return el;
}