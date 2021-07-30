function optionChanged(){

    // Grabbing the dropdown element
    let bio = d3.select("#selDataset").node().value;

    //build plot with data
    buildPlot(bio);
};

function buildPlot(bio){
    d3.json("././samples.json").then(function(data){
        let filteredData = data.samples.filter(d => d.id === bio);
        let sample_values = filteredData[0].sample_values.sort(function(a,b){return b-a});
        let otu_ids = filteredData[0].otu_ids;
        let otu_labels = filteredData[0].otu_labels;
        //build horizontal bar chart
        let trace1 = {
            y: otu_ids.toString(),
            x: sample_values.slice(0,10),
            marker: otu_ids.slice(0,10),
            text: otu_labels,
            orientation:'h',
            type:"bar"
        };
        let data1 = [trace1];
        let ticker = otu_ids.map(d=>d);
        let layout = {
            title: "Top 10 OTUs",
            yaxis: {
                autorange: 'reversed',
                tickmode: "array", 
                tickvals: [0,1,2,3,4,5,6,7,8,9],
                ticktext: ticker
                }
            }
        Plotly.newPlot('bar', data1, layout);
    })  
};

//load in initial data
function init(){
   
    d3.json("././samples.json").then((samples)=>{

    //build dropdownMenu with initial page being blank
    let ids = samples.names
    let selector = d3.select("#selDataset");
    selector.append("option").text("");
    ids.forEach((i)=>{
        let option = selector.append("option");
        option.text(i);
    });
});
};

init();