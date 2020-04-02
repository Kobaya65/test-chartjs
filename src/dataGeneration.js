/**
 * Génération d'un graphique "pie" (camembert)
 */
function Distribution() {
    /* 
        générer une valeur entre 0 et 10001 inclus,
        suppriemr les déimales, puis diviser par 200 
        pour obtenir un chiffre entre 0 et 100 inclus avec 2 décimales 
    */
    let val1 = Math.floor( Math.random() * 10001 ) / 100;
    let val2 = 100 - val1;

    let config = {
        type: 'pie',
        data: {
            labels: [
                'Not Validated Applications',
                'Validated Applications'
            ],
            datasets: [{
                data: [val1, val2],
                backgroundColor: ['#e9041e' /* rouge SG */, 'black'],
                label: 'Dataset 1'
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'RESG',
                fontSize: 15
            }
        }
    }

    return config
};

/**
 * Génération d'un graphique "line"
 */
function Progression() {
    let valeurs = []
    let init = Math.floor( Math.random() * 500 );
    let dec;

    /*
      Génération d'une courbe descendante
    */
    for ( let x = 0; x < 12; x++ ) {
        dec = Math.floor( Math.random() * ( init / 60 ) );
        init = init - dec;
        valeurs[x] = init;
    }

    let config = {
        type: 'line',
        data: {
            labels: ["Janv", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aou", "Sep", "Oct", "Nov", "Déc"],
            datasets:
                [{
                    label: "RESG 2018",
                    data: valeurs,
                    fill: true,
                    backgroundColor: "black",       // seulement si fill: true
                    borderColor: "#e9041e",
                    lineTension: 0,
                    borderWidth: 3,                 // épaisseur de la ligne
                    steppedLine: false,             // (false), true, 'before','after', 'middle'
                    //clip: { left: 5, top: false, right: -2, bottom: 0 },
                    pointBackgroundColor: "red",
                    // pointBorderColor: "green",      // couleur des points
                    pointBorderWidth: 3,            // taille des points
                    pointStyle: '',                 // 'circle', 'cross', 'crossRot', 'dash', 'line', 'rect', 'rectRounded', 'rectRot', 'star'
                    borderDash: [],  //[25, 5, 5, 5]  // ligne en pointillé ou tirets ; tableau vide = ligne pleine
                    // hoverBackgroundColor: ["yellow", "blue", "green", "white", "black", "grey", "lightBlue"]
                }/*,
                {
                    label: "RESG/BSC 2018",
                    data: [40, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 38],
                    fill: false,
                    borderColor: "black",
                    lineTension: 0
                }*/]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'RESG',
                fontSize: 15
            },
            // scales: {
            //     xAxes: [
            //         { type: 'time', time: { unit: 'month' } }
            //     ]
            // yAxes: [{
            //     ticks: {
            //         //calcul des bornes inférieure et supérieure du graph
            //         // min: this.props.data.value.min - ( this.props.data.value.min % 10 ),
            //         // max: this.props.data.value.max + 10 - ( this.props.data.value.max % 10 )
            //         min: 350,
            //         max: 550
            //     }
            // }]
        }
    }

    return config;
}

/**
 * Génération d'un graphique "bar" (histogramme)
 */
function Repartition() {
    let config = {
        type: 'bar',
        data: {
            labels: ["RESG/BSC", "RESG/BSC/ARC", "RESG/BSC/ISA", "RESG/BSC/TAE", "ITIM/SRO",
                "ITIM/SRO/ORM", "ITIM/SRO/ICI", "ITIM/SRO/MDK", "ITIM/CSB", "ITIM/CSB/POO"],
            datasets: [{
                // label: "Série 1",
                // data: [50, 17, 10, 23, 60, 20, 25, 30, 40, 27],
                data: [Math.floor( Math.random() * 80 ), Math.floor( Math.random() * 80 ), Math.floor( Math.random() * 80 ), Math.floor( Math.random() * 80 ), Math.floor( Math.random() * 80 ), Math.floor( Math.random() * 80 ), Math.floor( Math.random() * 80 ), Math.floor( Math.random() * 80 ), Math.floor( Math.random() * 80 ), Math.floor( Math.random() * 80 )],
                // barPercentage: 1,
                // barThickness: 150,
                // maxBarThickness: 120,
                // minBarLength: 2,
                backgroundColor: [rndColor(), rndColor(), rndColor(), rndColor(), rndColor(), rndColor(), rndColor(), rndColor(), rndColor(), rndColor()],
                hoverBackgroundColor: "#e9041e",
                hoverBorderColor: "black",
                hoverBorderWidth: 3
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'RESG',
                fontSize: 15,
                fontWeight: 'bold'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        steps: 10,
                        stepValue: 5,
                        max: 80
                    }
                }]
            }
        }
    }

    return config;
}

export { Progression, Repartition, Distribution };

/**
 * Renvoie la fonction rgb() avec des valeurs aléatoires de rouge, vert et bleu
 */
function rndColor() {
    let chaine = "rgb( ";

    // rouge
    chaine = chaine + Math.floor( Math.random() * 256 ) + ", ";
    // vert
    chaine = chaine + Math.floor( Math.random() * 256 ) + ", ";
    // bleu
    chaine = chaine + Math.floor( Math.random() * 256 ) + " )";

    return chaine;
}
