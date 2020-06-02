export default () => {

    const 
    /** Crea String con estructura a desplegar en la vista */
        view = `
            <h1>Home</h1>
            <p>Aplicación SPA usando Vanilla JavaScript</p>
        `,
        /** Crea elemento contenedor (convertira el String en Elementos HTML) */
        el = document .createElement( 'main' );
    
    el .classList = 'page page-home';   // Agrega clases al elemento principal de la vista
    el .innerHTML = view;               // Anida el contenido del String dentro del nuevo elemento 'main' 

    return el;
}