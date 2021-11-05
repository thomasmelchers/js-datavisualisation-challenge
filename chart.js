/* ------------------------ Emplaclement des graphiques --------------------- */

/* graph 1 */
const container1 = document.createElement("div");
const chart1 = document.createElement("canvas");
container1.setAttribute("id", "container1");
chart1.setAttribute("id", "graph1");
chart1.setAttribute("height","600");

const target1 = document.getElementById("table1");

container1.appendChild(chart1);
target1.before(container1);

/*  ------------------------- Récupérer les données du tableau 1 -------------- */

const tablebody = target1.getElementsByTagName("tbody")[0];
const row = tablebody.getElementsByTagName("tr")[1];
const column = row.getElementsByTagName("td")[0];


const rowTitle = tablebody.getElementsByTagName("tr")[0];
const columnTitle = rowTitle.getElementsByTagName("th")[0];

/* console.log(column.innerHTML);
console.log(row.getElementsByTagName("td").length-1); */


/* *** talbeau avec les années *** */

const year = [];

for (t=2 ; t<rowTitle.getElementsByTagName("th").length ; t++){
    year.push((rowTitle.getElementsByTagName("th")[t].innerHTML));
}

/* console.log(year); */

/* *** tableau avec les pays *** */

const country = [];

for (r=1 ; r<tablebody.getElementsByTagName("tr").length ; r++){
        country.push((tablebody.getElementsByTagName("tr")[r].getElementsByTagName("td")[0].innerHTML));
}

/* console.log(country); */


/* *** les valeurs *** */

/* création d'un tableau vide */
var countryVal = new Array;

/* boucle qui va créer pour chaque ligne une tableau avec les 11 valeurs inscrites elles-mêmes dans un tableau */

for (r=1 ; r<tablebody.getElementsByTagName("tr").length ; r++){
    countryVal[r] = new Array; 
    for (c=1 ; c<row.getElementsByTagName("td").length; c++){
        countryVal[r].push(parseFloat(tablebody.getElementsByTagName("tr")[r].getElementsByTagName("td")[c].innerHTML));
    }
}

/* accéder à l'ensemble des valeurs */
/* console.log(countryVal); */

/* accéder aux valeurs d'un tableau */
/* console.log(countryVal[0]); */

/* accéder à une valeur d'un tableau */
/* console.log(countryVal[1][5]);

console.log(typeof(countryVal[1][5])); */


/*  ---------------------- création du graphique ----------------------------------------- */

const ctx = chart1.getContext("2d");


const labels = year;

const obj = [];
for (i=0 ; i<country.length ; i ++ ){
    obj.push([country[i], countryVal[i+1]]); 
}
console.log[obj];
const donnees = Object.fromEntries(obj);
console.log(Object.keys(donnees).length);



/* for (n=0 ; n<Object.values(donnees).length ; n++){
    var data = Object.values(donnees)[n];
    var label = Object.keys(donnees)[n];
}

console.log(data);
console.log(label); */

const data = { 

    labels, 
    datasets:[{
        data: Object.values(donnees)[0],
        label: Object.keys(donnees)[0],
        /* fill: true, */
        backgroundColor: 'rgba(255, 245, 157, 0.2)',
        borderColor: 'rgb(255, 245, 157)',
        pointBackgroundColor: 'rgb(255, 245, 157)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 245, 157)',
        hidden: false
    },
    {
        data: Object.values(donnees)[1],
        label: Object.keys(donnees)[1],
        /* fill: true, */
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
        hidden: true
    },
    {
        data: Object.values(donnees)[2],
        label: Object.keys(donnees)[2],
        backgroundColor: 'rgba(186, 104, 200, 0.2)',
        borderColor: 'rgb(186, 104, 200)',
        pointBackgroundColor: 'rgb(186, 104, 200)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(186, 104, 200)',
        hidden: true
    },
    {
        data: Object.values(donnees)[3],
        label: Object.keys(donnees)[3],
        backgroundColor: 'rgba(121, 134, 203, 0.2)',
        borderColor: 'rgb(121, 134, 203)',
        pointBackgroundColor: 'rgb(121, 134, 203)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(121, 134, 203)',
        hidden: true
    },
    {
        data: Object.values(donnees)[4],
        label: Object.keys(donnees)[4],
        backgroundColor: 'rgba(100, 181, 246, 0.2)',
        borderColor: 'rgb(100, 181, 246)',
        pointBackgroundColor: 'rgb(100, 181, 246)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(100, 181, 246)',
        hidden: false
        
    },
    {
        data: Object.values(donnees)[5],
        label: Object.keys(donnees)[5],
        backgroundColor: 'rgba(77, 208, 225, 0.2)',
        borderColor: 'rgb(77, 208, 225)',
        pointBackgroundColor: 'rgb(77, 208, 225)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(77, 208, 225)',
        hidden: true
    },
    {
        data: Object.values(donnees)[6],
        label: Object.keys(donnees)[6],
        backgroundColor: 'rgba(77, 208, 225, 0.2)',
        borderColor: 'rgb(77, 208, 225)',
        pointBackgroundColor: 'rgb(77, 208, 225)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(77, 208, 225)',
        hidden: true
    },
    {
        data: Object.values(donnees)[7],
        label: Object.keys(donnees)[7],
        backgroundColor: 'rgba(156, 204, 101, 0.2)',
        borderColor: 'rgb(156, 204, 101)',
        pointBackgroundColor: 'rgb(156, 204, 101)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(156, 204, 101)',
        hidden: true
    },
    {
        data: Object.values(donnees)[8],
        label: Object.keys(donnees)[8],
        backgroundColor: 'rgba(255, 167, 38, 0.2)',
        borderColor: 'rgb(255, 167, 38)',
        pointBackgroundColor: 'rgb(255, 167, 38)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 167, 38)',
        hidden: true
    },
    {
        data: Object.values(donnees)[9],
        label: Object.keys(donnees)[9],
        backgroundColor: 'rgba(121, 85, 72, 0.2)',
        borderColor: 'rgb(121, 85, 72)',
        pointBackgroundColor: 'rgb(121, 85, 72)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(121, 85, 72)',
    },
    {
        data: Object.values(donnees)[10],
        label: Object.keys(donnees)[10],
        backgroundColor: 'rgba(0, 137, 123, 0.2)',
        borderColor: 'rgb(0, 137, 123)',
        pointBackgroundColor: 'rgb(0, 137, 123)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(0, 137, 123)',
        hidden: true
    },
    {
        data: Object.values(donnees)[11],
        label: Object.keys(donnees)[11],
        backgroundColor: 'rgba(0, 137, 123, 0.2)',
        borderColor: 'rgb(0, 137, 123)',
        pointBackgroundColor: 'rgb(0, 137, 123)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(0, 137, 123)',
        hidden: true
    },
    {
        data: Object.values(donnees)[12],
        label: Object.keys(donnees)[12],
        backgroundColor: 'rgba(244, 67, 54, 0.2)',
        borderColor: 'rgb(244, 67, 54)',
        pointBackgroundColor: 'rgb(244, 67, 54)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(244, 67, 54)',
        hidden: true
    },
    {
        data: Object.values(donnees)[13],
        label: Object.keys(donnees)[13],
        backgroundColor: 'rgba(94, 53, 177, 0.2)',
        borderColor: 'rgb(94, 53, 177)',
        pointBackgroundColor: 'rgb(94, 53, 177)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(94, 53, 177)',
        hidden: true
    },
    {
        data: Object.values(donnees)[14],
        label: Object.keys(donnees)[14],
        backgroundColor: 'rgba(0, 172, 193, 0.2)',
        borderColor: 'rgb(0, 172, 193)',
        pointBackgroundColor: 'rgb(0, 172, 193)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(0, 172, 193)',
        hidden: true
    },
    {
        data: Object.values(donnees)[15],
        label: Object.keys(donnees)[15],
        backgroundColor: 'rgba(124, 179, 66, 0.2)',
        borderColor: 'rgb(124, 179, 66)',
        pointBackgroundColor: 'rgb(124, 179, 66)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(124, 179, 66)',
        hidden: false
    },
    {
        data: Object.values(donnees)[16],
        label: Object.keys(donnees)[16],
        backgroundColor: 'rgba(253, 216, 53, 0.2)',
        borderColor: 'rgb(253, 216, 53)',
        pointBackgroundColor: 'rgb(253, 216, 53)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(253, 216, 53)',
        hidden: true
    },
    {
        data: Object.values(donnees)[17],
        label: Object.keys(donnees)[17],
        backgroundColor: 'rgba(244, 81, 30, 0.2)',
        borderColor: 'rgb(244, 81, 30)',
        pointBackgroundColor: 'rgb(244, 81, 30)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(244, 81, 30)',
        hidden: true
    },
    {
        data: Object.values(donnees)[18],
        label: Object.keys(donnees)[18],
        backgroundColor: 'rgba(176, 190, 197, 0.2)',
        borderColor: 'rgb(176, 190, 197)',
        pointBackgroundColor: 'rgb(176, 190, 197)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(176, 190, 197)',
        hidden: false
    },
    {
        data: Object.values(donnees)[19],
        label: Object.keys(donnees)[19],
        backgroundColor: 'rgba(211, 47, 47, 0.2)',
        borderColor: 'rgb(211, 47, 47)',
        pointBackgroundColor: 'rgb(211, 47, 47)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(211, 47, 47)',
        hidden: true
    },
    {
        data: Object.values(donnees)[20],
        label: Object.keys(donnees)[20],
        backgroundColor: 'rgba(225, 190, 231, 0.2)',
        borderColor: 'rgb(225, 190, 231)',
        pointBackgroundColor: 'rgb(225, 190, 231)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(225, 190, 231)',
        hidden: true
    },
    {
        data: Object.values(donnees)[21],
        label: Object.keys(donnees)[21],
        backgroundColor: 'rgba(255, 249, 196, 0.2)',
        borderColor: 'rgb(255, 249, 196)',
        pointBackgroundColor: 'rgb(255, 249, 196)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 249, 196)',
        hidden: true
    },
    {
        data: Object.values(donnees)[22],
        label: Object.keys(donnees)[22],
        backgroundColor: 'rgba(187, 222, 251, 0.2)',
        borderColor: 'rgb(187, 222, 251)',
        pointBackgroundColor: 'rgb(187, 222, 251)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(187, 222, 251)',
        hidden: true
    },
    {
        data: Object.values(donnees)[23],
        label: Object.keys(donnees)[23],
        backgroundColor: 'rgba(78, 52, 46, 0.2)',
        borderColor: 'rgb(78, 52, 46)',
        pointBackgroundColor: 'rgb(78, 52, 46)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(78, 52, 46)',
        hidden: true
    },
    {
        data: Object.values(donnees)[24],
        label: Object.keys(donnees)[24],
        backgroundColor: 'rgba(189, 189, 189, 0.2)',
        borderColor: 'rgb(189, 189, 189)',
        pointBackgroundColor: 'rgb(189, 189, 189)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(189, 189, 189)',
        hidden: true
    },
    {
        data: Object.values(donnees)[25],
        label: Object.keys(donnees)[25],
        backgroundColor: 'rgba(0, 131, 143, 0.2)',
        borderColor: 'rgb(0, 131, 143)',
        pointBackgroundColor: 'rgb(0, 131, 143)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(0, 131, 143)',
        hidden: true
    },
    {
        data: Object.values(donnees)[26],
        label: Object.keys(donnees)[26],
        backgroundColor: 'rgba(255, 204, 128, 0.2)',
        borderColor: 'rgb(255, 204, 128)',
        pointBackgroundColor: 'rgb(255, 204, 128)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 204, 128)',
        hidden: true
    },
    {
        data: Object.values(donnees)[27],
        label: Object.keys(donnees)[27],
        backgroundColor: 'rgba(33, 150, 243, 0.2)',
        borderColor: 'rgb(33, 150, 243)',
        pointBackgroundColor: 'rgb(33, 150, 243)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(33, 150, 243)',
        hidden: true
    },
    {
        data: Object.values(donnees)[28],
        label: Object.keys(donnees)[28],
        backgroundColor: 'rgba(233, 30, 99, 0.2)',
        borderColor: 'rgb(233, 30, 99)',
        pointBackgroundColor: 'rgb(233, 30, 99)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(233, 30, 99)',
        hidden: true
    },
    {
        data: Object.values(donnees)[29],
        label: Object.keys(donnees)[29],
        backgroundColor: 'rgba(139, 195, 74, 0.2)',
        borderColor: 'rgb(139, 195, 74)',
        pointBackgroundColor: 'rgb(139, 195, 74)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(139, 195, 74)',
        hidden: true
    },
    {
        data: Object.values(donnees)[30],
        label: Object.keys(donnees)[30],
        backgroundColor: 'rgba(244, 81, 30, 0.2)',
        borderColor: 'rgb(244, 81, 30)',
        pointBackgroundColor: 'rgb(244, 81, 30)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(244, 81, 30)',
        hidden: true
    },
    {
        data: Object.values(donnees)[31],
        label: Object.keys(donnees)[31],
        backgroundColor: 'rgba(106, 27, 154, 0.2)',
        borderColor: 'rgb(106, 27, 154)',
        pointBackgroundColor: 'rgb(106, 27, 154)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(106, 27, 154)',
        hidden: true
    },
    {
        data: Object.values(donnees)[32],
        label: Object.keys(donnees)[32],
        backgroundColor: 'rgba(253, 216, 53, 0.2)',
        borderColor: 'rgb(253, 216, 53)',
        pointBackgroundColor: 'rgb(253, 216, 53)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(253, 216, 53)',
        hidden: true
    },
    {
        data: Object.values(donnees)[33],
        label: Object.keys(donnees)[33],
        backgroundColor: 'rgba(244, 67, 54, 0.2)',
        borderColor: 'rgb(244, 67, 54)',
        pointBackgroundColor: 'rgb(244, 67, 54)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(244, 67, 54)',
        hidden: true
    },
    {
        data: Object.values(donnees)[34],
        label: Object.keys(donnees)[34],
        backgroundColor: 'rgba(0, 172, 193, 0.2)',
        borderColor: 'rgb(0, 172, 193)',
        pointBackgroundColor: 'rgb(0, 172, 193)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(0, 172, 193)',
        hidden: true
    }
]
};

const config = {
    type: "radar",
    data: data, 
    options: {
        scales: {
            r: {
                angleLines: {
                  color: '#602A48'
                },
                pointLabels: {
                    color: '#602A48'
                },
                ticks: {
                    color: 'rgba(75, 192, 192)'
                }
            }
        },
        radius: 5, 
        hoverRadius: 7,
        hitRadius: 30,
        responsive: true,
    }
}

const myChart = new Chart(ctx, config);

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

/* -------------------------------- GRAPH 3 ----------------- */
var valeurs3 = [];
const ctx3 = chart3.getContext("2d");

const data3 = { 
    labels : ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets:[ 
    {
        data: valeurs3,
        label: '',
        borderColor: 'rgb(75, 192, 192)',
        pointBackgroundColor: '#602A48',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#602A48',
        tension: 0.3
    }], 
};

const config3 = {
type: "line",
data: data3,
    options: {
        radius: 5, 
        hoverRadius: 7,
        hitRadius: 30,
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title:{
                    display: true,
                    text: "Number of Crimes Recorded",
                    color: 'rgb(75, 192, 192)'
                }
            }
            
        },
        plugins:{
            legend:{
                display: false,
            }
        }
    }
}

const myChart3 = new Chart(ctx3, config3);

/* Methode AJAX pour récupérer les données du serveur */

function interval() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://canvasjs.com/services/data/datapoints.php", true);
    xhr.responseType = "json";
    xhr.send();
    
    var dataRemote1;
    xhr.onload = function () {
      if (xhr.status != 200) {
        console.log(`error ${xhr.status} : ${xhr.statusText}`);
      } else {
        dataRemote1 = xhr.response.map((elem)=>{
            return elem [1];
        });

        valeurs3.push(dataRemote1);
        myChart3.update();

        if (valeurs3.length>11){
            valeurs3.shift();
            myChart3.update();
        }
      }
    };

    xhr.onerror = function () {
      console.log("La récupération a échoué");
    };
  
    xhr.onprogress = function (event) {
      lengthComputable = Boolean;
      if (event.lengthComputable) {
        console.log(`${event.loaded} octets reçus /${event.total}`);
      }
    };
  }
  setInterval(interval, 1000);
  console.log(valeurs3);