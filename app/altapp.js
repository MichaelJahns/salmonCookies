'use strict';

var hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

//Create All String
var locations = [];

function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Location Constructor
function LocationDemo(locationName, minCustomersHourly, maxCustomersHourly, cookiesPerCustomer)
{
  this.locationName = locationName;
  this.minCustomersHourly = minCustomersHourly;
  this.maxCustomersHourly = maxCustomersHourly;
  this.cookiesPerCustomer = cookiesPerCustomer;
  this.customersHourly = [];
  this.cookiesHourly = [];
  this.cookiesTotal = 0;
  locations.push(this);
}
//===================
//Location Prototypes
//===================

//Populate one instance of customersHourly
LocationDemo.prototype.sampleCustomers = function()
{
  for(var i = 0; i < hours.length; i++){
    var sampleCustomers = random(this.minCustomersHourly, this.maxCustomersHourly)
    this.customersHourly.push(sampleCustomers);
  }
  console.table(locations)
};

//Populate one instance of cookiesHourly and cookiesTotal
LocationDemo.prototype.sampleCookies = function()
{
  for(var i = 0; i < hours.length; i++)
  {
    var sampleCookies= Math.floor(this.cookiesPerCustomer*this.customersHourly[i]);
    this.cookiesHourly.push(sampleCookies);
    this.cookiesTotal += sampleCookies;
  }
  console.table(locations);
}
//Populate all instances of customersHourly and cookiesHourly and cookiesTotal
function populateTable()
{
  for(var i = 0; i < locations.length; i++){
    locations[i].sampleCustomers();
    locations[i].sampleCookies();
  }
  console.table(locations);
}

//===============
//Location Render
//===============

// LocationDemo.prototype.render = function ()
// {
//   var trEl = document.createElement('tr');
//   var tdEl = document.createElement('td');
//   //Name First Column Name
//   tdEl.textContent = this.locationName;
//   trEl.appendChild(tdEl);

//   for(var i = 0; i < hours.length; i++){
//     tdEl = document.createElement('td');
//     tdEl.textContent = this.cookiesHourly[i];
//     trEl.appendChild(tdEl);
//   }
//   dataTable.appendChild(trEl);
// };

//run all
// for(var i = 0; i < LocationDemo.locations.length; i++)



//new Location Instances
new LocationDemo('First and Pike', 23, 65, 6.3);
new LocationDemo('Seatac Airport', 2, 24, 1.2);
new LocationDemo('Seattle Center', 11, 38, 3.7);
new LocationDemo('Capitol Hill', 20, 38, 2.3);
new LocationDemo('Alki', 2, 16, 4.6);
console.table(locations)
