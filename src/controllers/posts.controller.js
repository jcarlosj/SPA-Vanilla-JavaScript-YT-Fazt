import view from '../views/posts.html';

const Posts = async () => {

    const el = document .createElement( 'main' );   // Crea elemento contenedor (convertira el String en Elementos HTML)
    
    el .classList = 'page page-posts';   // Agrega clases al elemento principal de la vista
    el .innerHTML = view;               // Anida el contenido del String dentro del nuevo elemento 'main' 

    /** Obtenemos los datos del API */
    const posts = await getPosts();
    console .log( 'Posts', posts );     // Despliega en la consola del navegador

    return el;
}

/** Realiza petición al API */
const getPosts = async () => {
    const response = await fetch( `https://jsonplaceholder.typicode.com/posts` );
        
    return await response .json();
}

export default Posts;