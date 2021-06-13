
var tbody = d3.select("tbody");

// data from data.js
console.log(data);


data.forEach(function(entry) {
console.log(entry);
var row = tbody.append("tr");
Object.entries(entry).forEach(function([key, value]) {
console.log(key, value);
var cell = row.append("td");
cell.text(value);
});
});

var tableData = data;
//link function to button in html
var button = d3.select("#find date");
var form = d3.select('form');
button.on("click", Sort);
form.on("submit", Sort);


function Sort() {
  d3.event.preventDefault();
  //not actually a datetime, just a date
  var Element = d3.select('#datetime');
  var Value = Element.property('value');
  console.log(Value);
  console.log(tableData);

  var filteredData = tableData.filter(entry => entry.datetime === Value);
  console.log(filteredData);
  d3.select('tbody').text('');
  var filterTbody = d3.select("tbody");

  
  filteredData.forEach(function(entry) {
  console.log(entry);
  var row = filterTbody.append("tr");
  Object.entries(entry).forEach(function([key, value]) {
    console.log(key, value);

    var cell = row.append("td");
    cell.text(value);
  });
});
};