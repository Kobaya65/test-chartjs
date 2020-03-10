/**
 * Génération de données pour créer un graphique "Line"
 */
function createDataArray1() {
    let data = [];

    // série 2019
    data.push(
        {
            title: "Number of validated applications",
            perimeter: "RESG",
            time: new Date( '2019-01-01T00:00:00' ),
            value: 403
        },
        {
            title: "Number of validated applications",
            perimeter: "RESG",
            time: new Date( '2019-02-01T00:00:00' ),
            value: 398
        },
        {
            title: "Number of validated applications",
            perimeter: "RESG",
            time: new Date( '2019-03-01T00:00:00' ),
            value: 398
        },
        {
            title: "Number of validated applications",
            perimeter: "RESG",
            time: new Date( '2019-04-01T00:00:00' ),
            value: 398
        },
        {
            title: "Number of validated applications",
            perimeter: "RESG",
            time: new Date( '2019-05-01T00:00:00' ),
            value: 397
        },
        {
            title: "Number of validated applications",
            perimeter: "RESG",
            time: new Date( '2019-06-01T00:00:00' ),
            value: 395
        },
        {
            title: "Number of validated applications",
            perimeter: "RESG",
            time: new Date( '2019-07-01T00:00:00' ),
            value: 395
        },
        {
            title: "Number of validated applications",
            perimeter: "RESG",
            time: new Date( '2019-08-01T00:00:00' ),
            value: 394
        },
        {
            title: "Number of validated applications",
            perimeter: "RESG",
            time: new Date( '2019-09-01T00:00:00' ),
            value: 393
        },
        {
            title: "Number of validated applications",
            perimeter: "RESG",
            time: new Date( '2019-10-01T00:00:00' ),
            value: 390
        },
        {
            title: "Number of validated applications",
            perimeter: "RESG",
            time: new Date( '2019-11-01T00:00:00' ),
            value: 390
        },
        {
            title: "Number of validated applications",
            perimeter: "RESG",
            time: new Date( '2019-12-01T00:00:00' ),
            value: 389
        } )

    return data;
}

function createDataArray2() {
    let data = [];

    // série 2018
    data.push(
        {
            perimeter: "RESG",
            time: new Date( '2018-01-01T00:00:00' ),
            value: 520
        },
        {
            perimeter: "RESG",
            time: new Date( '2018-02-01T00:00:00' ),
            value: 515
        },
        {
            perimeter: "RESG",
            time: new Date( '2018-03-01T00:00:00' ),
            value: 515
        },
        {
            perimeter: "RESG",
            time: new Date( '2018-04-01T00:00:00' ),
            value: 510
        },
        {
            perimeter: "RESG",
            time: new Date( '2018-05-01T00:00:00' ),
            value: 510
        },
        {
            perimeter: "RESG",
            time: new Date( '2018-06-01T00:00:00' ),
            value: 508
        },
        {
            perimeter: "RESG",
            time: new Date( '2018-07-01T00:00:00' ),
            value: 506
        },
        {
            perimeter: "RESG",
            time: new Date( '2018-08-01T00:00:00' ),
            value: 500
        },
        {
            perimeter: "RESG",
            time: new Date( '2018-09-01T00:00:00' ),
            value: 500
        },
        {
            perimeter: "RESG",
            time: new Date( '2018-10-01T00:00:00' ),
            value: 495
        },
        {
            perimeter: "RESG",
            time: new Date( '2018-11-01T00:00:00' ),
            value: 495
        },
        {
            perimeter: "RESG",
            time: new Date( '2018-12-01T00:00:00' ),
            value: 492
        } )

    return data;
}

export { createDataArray1, createDataArray2 };
