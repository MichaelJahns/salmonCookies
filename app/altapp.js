'use strict';

var hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

//Create All String
var locations = [];
//Create hourlyTotal String
var hourlyTotal = [];
var staffTotal = [];
var totalOfTotals = 0;
var totalOfStaffTotals = 0;

//HTML Table Elements
var staffTable = document.getElementById('staff');
var salmonTable = document.getElementById('data');
//HTML Form Elements
var submission = document.getElementById('newStore');

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
  this.staffNeeded = [];
  this.staffTotal = 0;
  locations.push(this);
}

//new Location Instances
new LocationDemo('First and Pike', 23, 65, 6.3);
new LocationDemo('Seatac Airport', 2, 24, 1.2);
new LocationDemo('Seattle Center', 11, 38, 3.7);
new LocationDemo('Capitol Hill', 20, 38, 2.3);
new LocationDemo('Alki', 2, 16, 4.6);

//Location Prototypes

//Populate one instance of customersHourly
LocationDemo.prototype.sampleCustomers = function()
{
  for(var i = 0; i < hours.length; i++){
    var sampleCustomers = random(this.minCustomersHourly, this.maxCustomersHourly)
    this.customersHourly[i] = sampleCustomers;
  }
};

//Populate one instance of cookiesHourly and cookiesTotal
LocationDemo.prototype.sampleCookies = function()
{
  this.cookiesTotal = 0;
  for(var i = 0; i < hours.length; i++)
  {
    var sampleCookies= Math.ceil(this.cookiesPerCustomer*this.customersHourly[i]);
    this.cookiesHourly[i] = sampleCookies;
    this.cookiesTotal += sampleCookies;
  }
}
//Second Table
LocationDemo.prototype.staffing = function()
{
  this.staffTotal = 0;
  for(var i = 0; i < hours.length; i++)
  {
    this.staffNeeded[i] = 2
    if (this.customersHourly[i] > 40)
    {
      this.staffNeeded[i] = Math.ceil((this.customersHourly[i]-40) /20) +2;
    }
    this.staffTotal += this.staffNeeded[i];
  }
  // console.table(locations);
}

//Populate all instances of customersHourly and cookiesHourly and cookiesTotal and staffNeeded
function populateTable()
{
  for(var i = 0; i < locations.length; i++){
    locations[i].sampleCustomers();
    locations[i].sampleCookies();
    locations[i].staffing();
  }
  console.table(locations);
}
//Hourly Cookie and Staff Totals
function pollTotals()
{
  totalOfTotals = 0;
  totalOfStaffTotals = 0;
  //Fill string with blank values
  for(var k = 0; k < hours.length; k++)
  {
    var blank = 0;
    hourlyTotal[k] = blank;
    staffTotal[k] = blank;
  }
  for(var i = 0; i < hours.length; i++)
  {
    for(var j = 0; j < locations.length; j++)
    {
      hourlyTotal[i] = hourlyTotal[i] + locations[j].cookiesHourly[i];
      // console.log (`${hourlyTotal} += ${locations[0].cookiesHourly[i]}`)
      staffTotal[i] = staffTotal[i] + locations[j].staffNeeded[i];
      // console.log (`${hourlyTotal} += ${locations[0].cookiesHourly[i]}`)
    }
    totalOfTotals += hourlyTotal[i]
    totalOfStaffTotals += staffTotal[i]
  }
  return(totalOfTotals, totalOfStaffTotals);
}

//Helper Functions
function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createElement(type, content, parent){
  var element = document.createElement(type);
  element.textContent = content;
  parent.appendChild(element);
}
function renderTables(){
  salmonTable.innerHTML = '';
  staffTable.innerHTML = '';
  renderHeader();
  for(var i = 0; i < locations.length; i++){
    locations[i].renderBody();
  }
  renderFooter();
}
function refreshPage(){
  populateTable();
  pollTotals();
  renderTables();
}


//Render Functions

function renderHeader(){
  //Table Sales
  var trEl = document.createElement('tr');
  createElement('th', 'Cookie Sales', trEl);
  for(var i = 0; i < hours.length; i++)
  {
    createElement('th', hours[i], trEl);
  }
  createElement('th', 'Total', trEl);
  salmonTable.appendChild(trEl);
  //Table Staff
  trEl = document.createElement('tr');
  createElement('th', 'Staff Needed', trEl);
  for(var j = 0; j < hours.length; j++)
  {
    createElement('th', hours[j], trEl);
  }
  createElement('th', 'Total', trEl);
  staffTable.appendChild(trEl);
}
LocationDemo.prototype.renderBody = function()
{
  //Table Sales
  var trEl = document.createElement('tr');
  createElement('td', this.locationName, trEl);
  for(var i = 0; i < hours.length; i++){
    createElement('td', this.cookiesHourly[i], trEl);
  }
  createElement('th', this.cookiesTotal, trEl);
  salmonTable.appendChild(trEl);

  //Table Staff
  trEl = document.createElement('tr');
  createElement('td', this.locationName, trEl);
  for(var j = 0; j < hours.length; j++){
    createElement('td', this.staffNeeded[j], trEl);
  }
  createElement('th',this.staffTotal, trEl);
  staffTable.appendChild(trEl);
};
function renderFooter(){
  //Table Sales
  var trEl = document.createElement('tr');
  createElement('th', 'Hourly Total\'s', trEl)
  for(var i = 0; i < hours.length; i++){
    createElement('th', hourlyTotal[i], trEl);
  }
  createElement('th', totalOfTotals, trEl);
  salmonTable.appendChild(trEl);
  //Table Staff
  trEl = document.createElement('tr');
  createElement('th','Hourly Total\'s', trEl);
  for(var j = 0; j < hours.length; j++){
    createElement('th', staffTotal[j],trEl);
  }
  createElement('th', totalOfStaffTotals, trEl);
  staffTable.appendChild(trEl);
}
//New Store Form Submission
function formSubmit(event){
  console.log(`New Store Data has been submitted.`);
  event.preventDefault();
  //Check if location exists
  var existing = false;
  for(var i = 0; i < locations.length; i++){
    if(locations[i].locationName.includes(event.target.where.value))
    {
      existing = true;
      console.log(existing);
      locations.splice(i, 1);
      break;
    }
  }
  //Create instance of New location, //re-ender tables and clear event.target
  new LocationDemo(event.target.where.value, parseFloat(event.target.min.value), parseFloat(event.target.max.value), parseFloat(event.target.average.value));

  refreshPage();
  event.target.where.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.average.value = null;
}

//========================================
//Executable Code
submission.addEventListener('submit', formSubmit);
refreshPage();