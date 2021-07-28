// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData
// https://nu.bootcampcontent.com/NU-Coding-Bootcamp/nu-chi-data-pt-02-2021-u-c/-/blob/master/01-Lesson-Plans/15-Interactive-Visualizations-and-Dashboards/3/Activities/08-Stu_Github_Pages/Solved/plot.js
// Initializes the page with a default plot
function init() {

    // Grabbing the dropdown element
    let selector = d3.select('#selDataset');

d3.json("data/samples.json").then((sampleData) => {
    console.log(sampledata)
    let namesdata = sampleData.names;

    // inserting names into drop down
    selector.selectAll('option')
    .data(names)
    .enter()
    .append('option')
    .attr('value', d => d)
    .text(d => d);


}
