'use strict';

var hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

//Create All String
var locations = [];
//Create hourlyTotal String
var hourlyTotal = [];
var staffTotal = [];
var totalOfTotals = 0;
var totalOfStaffTotals = 0;

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
    this.customersHourly.push(sampleCustomers);
  }
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
}
//Second Table
LocationDemo.prototype.staffing = function()
{
  for(var i = 0; i < hours.length; i++)
  {
    this.staffNeeded[i] = 2
    if (this.cookiesHourly[i] > 40)
    {
			this.staffNeeded[i] = Math.ceil((this.cookiesHourly[i]-40) /20) +2;
		}
		this.staffTotal += this.staffNeeded[i];
  }
  console.table(locations);
}

//Populate all instances of customersHourly and cookiesHourly and cookiesTotal and staffNeeded
function populateTable()
{
  for(var i = 0; i < locations.length; i++){
    locations[i].sampleCustomers();
    locations[i].sampleCookies();
    locations[i].staffing();
  }
}
populateTable();

//Hourly Cookie Totals
function pollHourly()
{
  //Fill string with blank values
  for(var k = 0; k < hours.length; k++)
  {
    var blank = 0;
    hourlyTotal.push(blank);
  }
  for(var i = 0; i < hours.length; i++)
  {
    for(var j = 0; j < locations.length; j++)
    {
      hourlyTotal[i] = hourlyTotal[i] + locations[j].cookiesHourly[i];
      // console.log (`${hourlyTotal} += ${locations[0].cookiesHourly[i]}`)
    }
    totalOfTotals += hourlyTotal[i]
  }
  return(totalOfTotals);

}
pollHourly();

//Hourly Staff Needs
function pollStaff()
{
  //Fill string with blank values
  for(var k = 0; k < hours.length; k++)
  {
    var blank = 0;
    staffTotal.push(blank);
  }
  for(var i = 0; i < hours.length; i++)
  {
    for(var j = 0; j < locations.length; j++){
      staffTotal[i] = staffTotal[i] + locations[j].staffNeeded[i];
      // console.log (`${hourlyTotal} += ${locations[0].cookiesHourly[i]}`)
    }
    totalOfStaffTotals += staffTotal[i]
  }
  return(totalOfTotals);

}
pollStaff();
//Renders
//Call HTML element into variable
var salmonTable = document.getElementById('data');

//Table One
//Render Header
function renderHeader(){
  //Blank Top Left Space
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Cookie Sales';
  trEl.appendChild(thEl);
  //All Hour Values
  for(var i = 0; i < hours.length; i++)
  {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  //Total Value Column
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  salmonTable.appendChild(trEl);
}


//Render Cell Data
LocationDemo.prototype.render = function()
{
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  //Name First Column
  tdEl.textContent = this.locationName;
  trEl.appendChild(tdEl);

  //Fill all hour Cells
  for(var i = 0; i < hours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesHourly[i];
    trEl.appendChild(tdEl);
  }

  //Fill the Total Cell
  var thEl = document.createElement('th');
  thEl.textContent = this.cookiesTotal;
  trEl.appendChild(thEl)

  salmonTable.appendChild(trEl);
};

//Render Footer
function renderFoot(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  //Name First
  thEl.textContent = 'Hourly Total\s';
  trEl.appendChild(thEl);

  //Fill all total Cells
  for(var i = 0; i < hours.length; i++){
    thEl =document.createElement('th');
    thEl.textContent = hourlyTotal[i];
    trEl.appendChild(thEl);
  }

  //totalOfTotals Cell
  thEl = document.createElement('th');
  thEl.textContent = totalOfTotals;
  trEl.appendChild(thEl);
  salmonTable.appendChild(trEl);
}
//Render all
function renderTable()
{
  renderHeader();
  for(var i = 0; i < locations.length; i++)
  {
    locations[i].render();
  }
  renderFoot();
}
renderTable();

//Table Two
var staffTable = document.getElementById('staff');
function renderHeaderTableTwo(){
  //Blank Top Left Space
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th')
  thEl.textContent = 'Staff Needed';
  trEl.appendChild(thEl);
  //All Hour Values
  for(var i = 0; i < hours.length; i++)
  {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  //Total Value Column
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  staffTable.appendChild(trEl);
}


//Render Cell Data
LocationDemo.prototype.renderStaff = function()
{
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  //Name First Column
  tdEl.textContent = this.locationName;
  trEl.appendChild(tdEl);

  //Fill all hour Cells
  for(var i = 0; i < hours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.staffNeeded[i];
    trEl.appendChild(tdEl);
  }

  //Fill the Total Cell
  var thEl = document.createElement('th');
  thEl.textContent = this.staffTotal;
  trEl.appendChild(thEl)

  staffTable.appendChild(trEl);
};

//Render Footer
function renderFootTableTwo(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  //Name First
  thEl.textContent = 'Hourly Total\s';
  trEl.appendChild(thEl);

  //Fill all total Cells
  for(var i = 0; i < hours.length; i++){
    thEl =document.createElement('th');
    thEl.textContent = staffTotal[i];
    trEl.appendChild(thEl);
  }

  //totalOfTotals Cell
  thEl = document.createElement('th');
  thEl.textContent = totalOfStaffTotals;
  trEl.appendChild(thEl);
  staffTable.appendChild(trEl);
}
//Render all
function renderTableTwo()
{
  renderHeaderTableTwo();
  for(var i = 0; i < locations.length; i++)
  {
    locations[i].renderStaff();
  }
  renderFootTableTwo();
}
renderTableTwo();


function why(){
  alert('why?');
}
