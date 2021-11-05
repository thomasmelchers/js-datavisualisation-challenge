/* **************************************** GRAPH 2 ******************************************* */

/* ------------------------ Emplaclement des graphiques --------------------- */

const container2 = document.createElement("div");
const chart2 = document.createElement("canvas");
container2.setAttribute("id", "container2");
chart2.setAttribute("id", "graph2");
chart2.setAttribute("height","300");

const target2 = document.getElementById("table2");

container2.appendChild(chart2);
target2.before(container2);

chart2.innerHTML = "Je suis un champion";

/*  ------------------------- Récupérer les données du tableau 1 -------------- */

const tablebody2 = target2.getElementsByTagName("tbody")[0];
const row2 = tablebody2.getElementsByTagName("tr")[1];
const column2 = row2.getElementsByTagName("td")[0];


const rowTitle2 = target2.getElementsByTagName("thead")[0].getElementsByTagName("tr")[0];
const columnTitle2 = rowTitle2.getElementsByTagName("th")[0];

/* *** Récupérer les pays *** */

const country2 = [];

for (a=0 ; a<tablebody2.getElementsByTagName("tr").length ; a++){
    country2.push((tablebody2.getElementsByTagName("tr")[a].getElementsByTagName("td")[0].innerText));
}

/* console.log(country2); */

/* *** Récupérer les années *** */

const years2 = [];

/* console.log(target2.getElementsByTagName("thead")[0].getElementsByTagName("tr")[0].getElementsByTagName("th").length); */

for (y=2 ; y<rowTitle2.getElementsByTagName("th").length ; y++){
    years2.push(rowTitle2.getElementsByTagName("th")[y].innerHTML);
}

/* console.log(years2); */

/*  *** les valeurs du tableau *** */

var valuesArray2 = new Array ; 

for (w=0 ; w<tablebody2.getElementsByTagName("tr").length ; w++){
    valuesArray2[w] = new Array ;
    for (y=1 ; y<row2.getElementsByTagName("td").length ; y++){
        valuesArray2[w].push(parseFloat(tablebody2.getElementsByTagName("tr")[w].getElementsByTagName("td")[y].innerHTML));
    }
}

var val2007 = [];
var val2010 = [];

console.log(valuesArray2);
console.log(valuesArray2[29][1]);

for (i=0 ; i<valuesArray2.length ; i++){
    val2007.push(valuesArray2[i][0]);
}

for (i=0 ; i<valuesArray2.length ; i++){
    val2010.push(valuesArray2[i][1]);
}

/* console.log(val2007);
console.log(val2010); */

/* *** CREATION DE L'OBJET */

/* const obj2 = [];
for (i=0 ; i<country2.length ; i ++ ){
    obj2.push([country2[i], valuesArray2[i]]); 
}
const donnees2 = Object.fromEntries(obj2);
console.log(donnees2);

console.log(donnees2);

console.log(Object.keys(donnees2)[0]);
console.log(Object.values(donnees2)[1][1]); */


/*  ---------------------- création du graphique ----------------------------------------- */

const ctx2 = chart2.getContext("2d");

/* const labels2 = years2 ; */

const data2 = { 

    labels: country2, 
    datasets:[ 
   {
        data: val2007,
        label: years2[0],
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgb(255, 159, 64)',
        borderWidth: 1
    },
    {
        data: val2010,
        label: years2[1],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
        hidden: true
    },
   ],
};

const config2 = {
    type: "bar",
    data: data2, 
    options: {
        indexAxis: 'y',
        responsive: true,
    }
}

const myChart2 = new Chart(ctx2, config2);

/* **************************************** GRAPH 2 ******************************************* */
/*  --------------------------------------- Récupération des données  ---------------------------------------- */


const container3 = document.createElement("div");
const chart3 = document.createElement("canvas");
container3.setAttribute("id", "container3");
chart3.setAttribute("id", "graph3");
chart3.setAttribute("height","200");

const target3 = document.getElementById("firstHeading");

container3.appendChild(chart3);
target3.after(container3);