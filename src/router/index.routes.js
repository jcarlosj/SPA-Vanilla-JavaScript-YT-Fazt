const router = ( route ) => {
    console .log( 'Route', route );

    switch( route ) {
        case '#/':
            return console .log( 'Route', route,`Home Page` );
        case '#/products':
            return console .log( `Products Page` );    
        case '#/posts':
            return console .log( `Posts Page` );
        default: 
            return console .log( `404 Page!!!` );
    }
}

export { router };