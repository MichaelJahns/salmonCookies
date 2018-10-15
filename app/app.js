'use strict';
var hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
var pikeAndFirst =
{
  name: '1st and Pike Street',
  id: 'location1',
  customersMinByHour: 23,
  customersMaxByHour: 65,
  cookiesSoldAverage: 6.3,
  cookiesByHour: [],
  cookiesTotal: 0
}

pikeAndFirst.cookiesSold = function()
{
  for (var i = 0; i < hours.length; i++)
  {
    // console.log(`I is ${i}`);
    var randomCustomers = Math.floor(Math.random() * (this.customersMaxByHour - this.customersMinByHour +1 )) + this.customersMinByHour;
    // console.log('Number of customers this hours: ' + randomCustomers);
    var cookiesSold = Math.floor(randomCustomers * this.cookiesSoldAverage);
    // console.log('Cookies sold this hour: ' + cookiesSold);
    pikeAndFirst.cookiesByHour.push(cookiesSold);
    this.cookiesTotal += cookiesSold;
  }

};
pikeAndFirst.cookiesSold();

pikeAndFirst.render = function()
{
  var pikeAndFirstUL = document.getElementById(this.id)
  for (var i = 0; i < this.cookiesByHour.length; i++)
  {
    // console.log(`I is ${i}`);
    var liElement = document.createElement('li');
    liElement.textContent = `${hours[i]}:00 ${this.cookiesByHour[i]} cookies sold this hour.`;
    pikeAndFirstUL.appendChild(liElement);

    //total line
    if( i === 14){
      var liElement = document.createElement('li');
      liElement.textContent = `Total Cookies needed at ${this.name} is ${this.cookiesTotal}`;
      pikeAndFirstUL.appendChild(liElement);
    }
  }
};
pikeAndFirst.render();

var seatacAirport =
{
  name: 'Seatac Airport',
  id: 'location2',
  customersMinByHour: 2,
  customersMaxByHour: 24,
  cookiesSoldAverage: 1.2,
  cookiesByHour: [],
  cookiesTotal: 0
}

seatacAirport.cookiesSold = function()
{
  for (var i = 0; i < hours.length; i++)
  {
    // console.log(`I is ${i}`);
    var randomCustomers = Math.floor(Math.random() * (this.customersMaxByHour - this.customersMinByHour +1 )) + this.customersMinByHour;
    // console.log('Number of customers this hours: ' + randomCustomers);
    var cookiesSold = Math.floor(randomCustomers * this.cookiesSoldAverage);
    // console.log('Cookies sold this hour: ' + cookiesSold);
    seatacAirport.cookiesByHour.push(cookiesSold);
    this.cookiesTotal += cookiesSold;
  }

};
seatacAirport.cookiesSold();

seatacAirport.render = function()
{
  var seatacAirportUL = document.getElementById(this.id)
  for (var i = 0; i < this.cookiesByHour.length; i++)
  {
    // console.log(`I is ${i}`);
    var liElement = document.createElement('li');
    liElement.textContent = `${hours[i]}:00 ${this.cookiesByHour[i]} cookies sold this hour.`;
    seatacAirportUL.appendChild(liElement);
    //total line
    if( i === 14){
      var liElement = document.createElement('li');
      liElement.textContent = `Total Cookies needed at ${this.name} is ${this.cookiesTotal}`;
      seatacAirportUL.appendChild(liElement);
    }
  }
};
seatacAirport.render();

var seattleCenter =
{
  name: 'Seattle Center',
  id: 'location3',
  customersMinByHour: 11,
  customersMaxByHour: 38,
  cookiesSoldAverage: 3.7,
  cookiesByHour: [],
  cookiesTotal: 0
}

seattleCenter.cookiesSold = function()
{
  for (var i = 0; i < hours.length; i++)
  {
    // console.log(`I is ${i}`);
    var randomCustomers = Math.floor(Math.random() * (this.customersMaxByHour - this.customersMinByHour +1 )) + this.customersMinByHour;
    // console.log('Number of customers this hours: ' + randomCustomers);
    var cookiesSold = Math.floor(randomCustomers * this.cookiesSoldAverage);
    // console.log('Cookies sold this hour: ' + cookiesSold);
    seattleCenter.cookiesByHour.push(cookiesSold);
    this.cookiesTotal += cookiesSold;
  }

};
seattleCenter.cookiesSold();

seattleCenter.render = function()
{
  var seattleCenterUL = document.getElementById(this.id)
  for (var i = 0; i < this.cookiesByHour.length; i++)
  {
    // console.log(`I is ${i}`);
    var liElement = document.createElement('li');
    liElement.textContent = `${hours[i]}:00 ${this.cookiesByHour[i]} cookies sold this hour.`;
    seattleCenterUL.appendChild(liElement);
    //total line
    if( i === 14){
      var liElement = document.createElement('li');
      liElement.textContent = `Total Cookies needed at ${this.name} is ${this.cookiesTotal}`;
      seattleCenterUL.appendChild(liElement);
    }
  }
};
seattleCenter.render();


var capitolHill =
{
  name: 'Capitol Hill',
  id: 'location4',
  customersMinByHour: 20,
  customersMaxByHour: 38,
  cookiesSoldAverage: 2.3,
  cookiesByHour: [],
  cookiesTotal: 0
}

capitolHill.cookiesSold = function()
{
  for (var i = 0; i < hours.length; i++)
  {
    // console.log(`I is ${i}`);
    var randomCustomers = Math.floor(Math.random() * (this.customersMaxByHour - this.customersMinByHour +1 )) + this.customersMinByHour;
    // console.log('Number of customers this hours: ' + randomCustomers);
    var cookiesSold = Math.floor(randomCustomers * this.cookiesSoldAverage);
    // console.log('Cookies sold this hour: ' + cookiesSold);
    capitolHill.cookiesByHour.push(cookiesSold);
    this.cookiesTotal += cookiesSold;
  }

};
capitolHill.cookiesSold();

capitolHill.render = function()
{
  var capitolHillUL = document.getElementById(this.id)
  for (var i = 0; i < this.cookiesByHour.length; i++)
  {
    // console.log(`I is ${i}`);
    var liElement = document.createElement('li');
    liElement.textContent = `${hours[i]}:00 ${this.cookiesByHour[i]} cookies sold this hour.`;
    capitolHillUL.appendChild(liElement);
    //total line
    if( i === 14){
      var liElement = document.createElement('li');
      liElement.textContent = `Total Cookies needed at ${this.name} is ${this.cookiesTotal}`;
      capitolHillUL.appendChild(liElement);
    }
  }
};
capitolHill.render();


var alki =
{
  name: 'Alki',
  id: 'location5',
  customersMinByHour: 2,
  customersMaxByHour: 16,
  cookiesSoldAverage: 4.6,
  cookiesByHour: [],
  cookiesTotal: 0
}

alki.cookiesSold = function()
{
  for (var i = 0; i < hours.length; i++)
  {
    // console.log(`I is ${i}`);
    var randomCustomers = Math.floor(Math.random() * (this.customersMaxByHour - this.customersMinByHour +1 )) + this.customersMinByHour;
    // console.log('Number of customers this hours: ' + randomCustomers);
    var cookiesSold = Math.floor(randomCustomers * this.cookiesSoldAverage);
    // console.log('Cookies sold this hour: ' + cookiesSold);
    alki.cookiesByHour.push(cookiesSold);
    this.cookiesTotal += cookiesSold;
  }

};
alki.cookiesSold();

alki.render = function()
{
  var alkiUL = document.getElementById(this.id)
  for (var i = 0; i < this.cookiesByHour.length; i++)
  {
    // console.log(`I is ${i}`);
    var liElement = document.createElement('li');
    liElement.textContent = `${hours[i]}:00 ${this.cookiesByHour[i]} cookies sold this hour.`;
    alkiUL.appendChild(liElement);
    //total line
    if( i === 14){
      var liElement = document.createElement('li');
      liElement.textContent = `Total Cookies needed at ${this.name} is ${this.cookiesTotal}`;
      alkiUL.appendChild(liElement);
    }
  }
};
alki.render();

function why(){
  alert('why?');
}
