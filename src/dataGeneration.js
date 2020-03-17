/**
 * Génération de données pour créer un graphique "Camembert"
 */
function Distribution() {
    let config = {
        type: 'pie',
        data: {
            datasets: [{
                data: [
                    26,
                    74
                ],
                backgroundColor: [
                    '#e9041e',  // rouge SG
                    'black'
                ],
                label: 'Dataset 1'
            }],
            labels: [
                'Not Validated Applications',
                'Validated applications'
            ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'RESG Validated / Not validated Applications as of 12-March-2020',
                fontSize: 30
            }
        }
    }

    return config
};

/**
 * Génération de données pour créer un graphique "Line"
 */
function Progression() {
    let config = {
        type: 'line',
        data: {
            labels: ["Janv", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aou", "Sep", "Oct", "Nov", "Déc"],
            datasets:
                [{
                    label: "RESG 2018",
                    data: [403, 398, 398, 398, 396, 395, 395, 394, 393, 390, 390, 389],
                    fill: true,
                    backgroundColor: "black",       // seulement si fill: true
                    borderColor: "#e9041e",
                    lineTension: 0,
                    borderWidth: 5,                 // épaisseur de la ligne
                    steppedLine: false,             // (false), true, 'before','after', 'middle'
                    //clip: { left: 5, top: false, right: -2, bottom: 0 },
                    pointBackgroundColor: "red",
                    // pointBorderColor: "green",      // couleur des points
                    pointBorderWidth: 5,            // taille des points
                    pointStyle: '',                 // 'circle', 'cross', 'crossRot', 'dash', 'line', 'rect', 'rectRounded', 'rectRot', 'star'
                    borderDash: [],  //[25, 5, 5, 5]  // ligne en pointillé ou tirets ; tableau vide = ligne pleine
                    hoverBackgroundColor: ["yellow", "blue", "green", "white", "black", "grey", "lightBlue"]
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
                text: 'RESG Applications in Prod as of 12-March-2020',
                fontSize: 30
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

/**
 * Génération de données pour créer un graphique "Histogramme"
 */
function Repartition() {
    let config = {
        type: 'bar',
        data: {
            labels: ["RESG/BSC", "RESG/BSC/ARC", "RESG/BSC/ISA", "RESG/BSC/TAE", "ITIM/SRO",
                "ITIM/SRO/ORM", "ITIM/SRO/ICI", "ITIM/SRO/MDK", "ITIM/CSB", "ITIM/CSB/POO"],
            datasets: [{
                // label: "Série 1",
                data: [50, 17, 10, 23, 60, 20, 25, 30, 40, 27],
                // barPercentage: 1,
                // barThickness: 150,
                // maxBarThickness: 120,
                // minBarLength: 2,
                backgroundColor: [
                    rndColor(),
                    rndColor(),
                    rndColor(),
                    rndColor(),
                    rndColor(),
                    rndColor(),
                    rndColor(),
                    rndColor(),
                    rndColor(),
                    rndColor()
                ],
                hoverBackgroundColor: "#e9041e",
                hoverBorderColor: "black",
                hoverBorderWidth: 10
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'RESG Applications per Cds/Csm in Prod as of 12-March-2020',
                fontSize: 30,
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
