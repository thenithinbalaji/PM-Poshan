d3.csv('/get_graph_data', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var scl = [[0,'rgba(64,199,104,1)'],[0.5,'rgba(244,255,78,1)'],[1,'rgba(247,41,41,1)']];

    var data = [{
        type:'scattergeo',
        lon: unpack(rows, 'long'),
        lat: unpack(rows, 'lat'),
        hoverinfor:  unpack(rows, 'name'),
        text:  unpack(rows, 'name'),
        mode: 'markers',
        marker: {
            size: 8,
            opacity: 0.8,
            reversescale: true,
            autocolorscale: false,
            symbol: 'circle',
            line: {
                width: 1,
                color: 'rgb(102,102,102)'
            },
            colorscale: scl,
            cmin: 0,
            color: unpack(rows, 'cnt'),
            colorbar: {
                title: 'Health Performance'
            }
        }
    }];


    var layout = {
        title: 'Schools',
        colorbar: true,
        zoom: 0.8,
        pitch: 0,
        center: {lat: 22.669290, lon: 77.864359},
        geo: {
            showland: true,
            landcolor: 'rgb(250,250,250)',
            subunitcolor: 'rgb(217,217,217)',
            countrycolor: 'rgb(217,217,217)',
            countrywidth: 0.5,
            subunitwidth: 0.5
        }
    };

    Plotly.newPlot("graph", data, layout);

});
