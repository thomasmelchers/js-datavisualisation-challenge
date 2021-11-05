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