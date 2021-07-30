function optionChanged(){

    // Grabbing the dropdown element
    let bio = d3.select("#selDataset").node().value;

    //build plot with new data
    buildPlot(bio);
};

function buildPlot(bio){
    d3.json("././samples.json").then(function(data){
        let filteredData = data.samples.filter(d => d.id === bio);
        let sample_values = filteredData[0].sample_values.sort(function(a,b){return b-a});
        let otu_ids = filteredData[0].otu_ids;
        let otu_labels = filteredData[0].otu_labels;  
};