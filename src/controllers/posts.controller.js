import view from '../views/posts.html';

const Posts = async () => {

    const el = document .createElement( 'main' );   // Crea elemento contenedor (convertira el String en Elementos HTML)
    
    el .classList = 'page page-posts';   // Agrega clases al elemento principal de la vista
    el .innerHTML = view;               // Anida el contenido del String dentro del nuevo elemento 'main' 

    let $totalEl = el .querySelector( '#total' );

    /** Obtenemos los datos del API */
    const posts = await getPosts();
    $totalEl .innerHTML = posts .length;
    
    console .log( 'Posts', posts );     // Despliega en la consola del navegador

    /** Obtenemos el elemento de la vista donde queremos agregar las publicaciones */
    const $postsEl = el .querySelector( '#posts' );

    posts .forEach( post => {
        const template = `
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${ post .title }</h5>
                    <small>${ post .id }</small>
                </div>
                <p class="mb-1">${ post .body }</p>
                <small>Donec id elit non mi porta.</small>
            </a>
        `;

        $postsEl .innerHTML += template;
    });


    return el;
}

/** Realiza petición al API */
const getPosts = async () => {
    const response = await fetch( `https://jsonplaceholder.typicode.com/posts?_limit=10` );
        
    return await response .json();
}

export default Posts;