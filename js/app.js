'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let  Stores = [];
let Table = document.getElementById('table');
let Total = 0;
let hourlyTotalsArray = [];

function Sales( MinCust, MaxCust ,AvgCookieSale, contry) {
  this.MinCust = MinCust;
  this.MaxCust = MaxCust;
  this.AvgCookieSale = AvgCookieSale;
  this.contry = contry;
  this.cookiesSoldPerHour = [],
  this.totalCookies = 0;

  Stores.push(this);
console.log(Stores);
 

  this.dailyTotal = function(){
    for(let i = 0; i < this.cookiesSoldPerHour.length; i++){
      this.totalCookies += this.cookiesSoldPerHour[i];
    }
  };
  this.dailyStats = function(){
    this.hourlyTotals();
    this.dailyTotal();
    this.render();
  };
  this.render = function(){
    let trElement = document.createElement('tr');
    let tdElement = document.createElement('td');
    tdElement.textContent = this.contry;
    trElement.append(tdElement);
    for(let i = 0; i < this.cookiesSoldPerHour.length; i++){
      tdElement = document.createElement('td');
      tdElement.textContent = this.cookiesSoldPerHour[i];
      trElement.append(tdElement);
    }
    tdElement = document.createElement('td');
    tdElement.textContent = this.totalCookies;
    trElement.append(tdElement);
    Table.append(trElement);
  };
}
Sales.prototype.hourlyCustomer = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
Sales.prototype.hourlyTotals = function() {
  for ( let i = 0; i < hours.length; i++) {
    this.cookiesSoldPerHour.push(Math.ceil(this.hourlyCustomer(this.MinCust, this.MaxCust) * this.AvgCookieSale));
  }
}
function renderHeader() {
  let trHead = document.getElementById ('table');
   trHead = document.createElement('tr');
  let tdElement = document.createElement('td');
  tdElement.textContent = 'Sale Time';
  trHead.append(tdElement);
  for(let i = 0; i < hours.length; i++){
    let thElement = document.createElement('th');
    thElement.textContent = (hours[i]);
    trHead.append(thElement);
  }
  let tdTotalHead = document.createElement('td');
  tdTotalHead.textContent = 'totals';
  trHead.append(tdTotalHead);
  let Table = document.getElementById('table');
  Table.append(trHead);
}

renderHeader();

let Seattle = new Sales(23, 65, 6.3, 'Seattle');
let Tokyo = new Sales(3, 24, 1.2, 'Tokyo');
let Dubai = new Sales(11, 38, 3.7, 'Dubai');
let Paris = new Sales(20, 38, 2.3, 'Paris');
let Lima = new Sales(2, 16, 4.6, 'Lima');


Seattle.dailyStats();
Tokyo.dailyStats();
Dubai.dailyStats();
Paris.dailyStats();
Lima.dailyStats();


