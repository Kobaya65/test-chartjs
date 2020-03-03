// valeurs minimale et maximale utilisées pour calculer les bornes du graphique
let valMin = 100000;
let valMax = 0;

function createDataArray() {
    let data = [];

    // janvier 2019
    data.push( {
        time: new Date( '2019-01-01T00:00:00' ),
        value: 403
    } );
    computeMinMax( data );
    // février 2019
    data.push( {
        time: new Date( '2019-02-01T00:00:00' ),
        value: 398
    } );
    computeMinMax( data );
    // mars 2019
    data.push( {
        time: new Date( '2019-03-01T00:00:00' ),
        value: 398
    } );
    computeMinMax( data );
    // avril 2019
    data.push( {
        time: new Date( '2019-04-01T00:00:00' ),
        value: 398
    } );
    computeMinMax( data );
    // mai 2019
    data.push( {
        time: new Date( '2019-05-01T00:00:00' ),
        value: 397
    } );
    computeMinMax( data );
    // juin 2019
    data.push( {
        time: new Date( '2019-06-01T00:00:00' ),
        value: 395
    } );
    computeMinMax( data );
    // juillet 2019
    data.push( {
        time: new Date( '2019-07-01T00:00:00' ),
        value: 395
    } );
    computeMinMax( data );
    // aout 2019
    data.push( {
        time: new Date( '2019-08-01T00:00:00' ),
        value: 394
    } );
    computeMinMax( data );
    // septembre 2019
    data.push( {
        time: new Date( '2019-09-01T00:00:00' ),
        value: 393
    } );
    computeMinMax( data );
    // octobre 2019
    data.push( {
        time: new Date( '2019-10-01T00:00:00' ),
        value: 390
    } );
    computeMinMax( data );
    // novembre 2019
    data.push( {
        time: new Date( '2019-11-01T00:00:00' ),
        value: 390
    } );
    computeMinMax( data );
    // décembre 2019
    data.push( {
        time: new Date( '2019-12-01T00:00:00' ),
        value: 389
    } );
    computeMinMax( data );

    return data;
}

/**
 * Compare la valeur de la propriété value du dernier élément du tableau avec valMin et valMax
 * 
 * @param {*} tableau tableau des objets du graphique
 */
function computeMinMax( tableau ) {
    valMin = Math.min( valMin, tableau[tableau.length - 1].value );
    valMax = Math.max( valMax, tableau[tableau.length - 1].value );
}

export { createDataArray, valMin, valMax };
