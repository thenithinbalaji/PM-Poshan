let curr_url = window.location.href;

fetch(curr_url + "/get_school_graph_data")
.then(response => {
    return response.json();
})
.then(data => {
    
    console.log(data)

let boys_heights = data.boys.height;
let boys_weights = data.boys.weight;

let girls_heights = data.girls.height;
let girls_weights = data.girls.weight;



Plotly.newPlot('boys', [{
    x: boys_heights,
    y: boys_weights,
    mode: 'lines+markers',
    line: {
        color: 'rgb(128,128,128)'
    }
}], {
  paper_bgcolor: "rgb(255, 255, 255)",
  title: "Boys",
  autosize: false,
  width: 370,
  height: 200,
  margin: {
    l: 50,
    r: 50,
    b: 50,
    t: 30,
    pad: 10
  },
  xaxis: {
    title: 'Height',
    range: [100, 150],
    autorange: false,
    showgrid: false
  },
  yaxis: {
    title: 'Weight',
    range: [10, 70],
    autorange: false,
    showgrid: false
  },
  images: [
      {
        "source": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRYBHAToWjAUnXyvDE-3r7t7JddTF2VhWkrsnsOSp1uRxnukZzrh-MnkJDg3NGeffjy0&usqp=CAU",
        "xref": "x",
        "yref": "y",
        "x": 90,
        "y": 92,
        "sizex": 100,
        "sizey": 100,
        "opacity": 0.5,
        "sizing": "stretch",
        "xanchor": "left",
        "yanchor": "top",
        "layer": "below"
      },
    ]
},
{
  staticPlot: true
})

Plotly.newPlot('girls', [{
    x: girls_heights,
    y: girls_weights,
    mode: "lines+markers",
    line: {
        color: 'rgb(128,128,128)'
    }
}], {
  paper_bgcolor: "rgb(255, 255, 255)",
  title: "Girls",
  autosize: false,
  width: 380,
  height: 200,
  margin: {
    l: 50,
    r: 50,
    b: 50,
    t: 30,
    pad: 10
  },
  xaxis: {
    title: 'Height',
    range: [100, 150],
    autorange: false,
    showgrid: false
},
yaxis: {
    title: 'Weight',
    range: [10, 70],
    autorange: false,
    showgrid: false
},
images: [
    {
        "source": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRYBHAToWjAUnXyvDE-3r7t7JddTF2VhWkrsnsOSp1uRxnukZzrh-MnkJDg3NGeffjy0&usqp=CAU",
        "xref": "x",
        "yref": "y",
        "x": 90,
        "y": 92,
        "sizex": 100,
        "sizey": 100,
        "opacity": 0.5,
        "sizing": "stretch",
        "xanchor": "left",
        "yanchor": "top",
        "layer": "below"
    },
]
},
{
  staticPlot: true
})
});