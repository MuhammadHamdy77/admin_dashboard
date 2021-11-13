// global Variable

let notif   = document.querySelector(".notif"),
    avatar  = document.querySelector(".avatar")

    dropMenu(notif)
    dropMenu(avatar)
    function dropMenu(selector) {

        selector.addEventListener("click" , ()=>{

            let dropDownMenu = selector.querySelector(".dropdown-menu")
            dropDownMenu.classList.contains("active")? dropDownMenu.classList.remove("active") :dropDownMenu.classList.add("active") 
        })
      }

let barse   = document.querySelector(".barse"),
    sidebar = document.querySelector(".sidebar")
barse.addEventListener("click" , ()=>{

    sidebar.classList.toggle("active")
})

// Chart

let products = [800,320,780,415,656,789]
let orders = [753,827,541,985,365,412]
let vendors = [559,357,987,789,369,741]

var options = {
    chart: {
        type: 'area',
        height: '100%',
        width: '100%',
    },
    
    series: [{
        type: 'area',
        name: "Product",
        data: [...products]
      }, {
        type: 'area',
        name: "Vendors",
        data: [...vendors]
      },
      {
        type: 'area',
        name: "Orders",
        data: [...orders]
      },
    ],
    colors:['#82C4C3', '#F9D89C', '#F5A7A7'],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();


//   Dark moode
let mode = document.querySelector(".mode")

mode.addEventListener("click" , ()=>{
    document.body.classList.toggle("dark")
    if(document.body.classList.contains('dark')){
        mode.querySelector("i").classList.replace('fa-moon' , "fa-sun")
        
    }else{
        mode.querySelector("i").classList.replace('fa-sun' , "fa-moon")
    }
})

window.matchMedia("(max-width:768px)").matches ? sidebar.classList.remove("active") : sidebar.classList.add("active")