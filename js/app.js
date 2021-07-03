'use strict';


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Stores = [];
let grandTotal = 0;
let hourlyTotalsArray = [];
let hourlyTotal = 0;





function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}




function Sales(MinCust, MaxCust, AVGcookies, contry) {
  this.MinCust = MinCust;
  this.MaxCust = MaxCust;
  this.AVGcookies = AVGcookies;
  this.contry = contry;
  this.AVGCOOkiPH = [];
  this.NofcostPH = [];
  this.total = 0;
  Stores.push(this);
}




Sales.prototype.costPH = function () {
  for (let i = 0; i < hours.length; i++) {

    this.NofcostPH.push(random(this.MinCust, this.MaxCust));
  }
  console.log(this.NofcostPH);
}






Sales.prototype.AVGco = function () {
  for (let i = 0; i < hours.length; i++) {
    this.AVGCOOkiPH[i] = (Math.floor(this.NofcostPH[i] * this.AVGcookies));
    this.total += this.AVGCOOkiPH[i];
  }
}




Sales.prototype.AVGco = function () {
  for (let i = 0; i < hours.length; i++) {
    this.AVGCOOkiPH[i] = (Math.floor(this.NofcostPH[i] * this.AVGcookies));
    this.total += this.AVGCOOkiPH[i];
  }
  console.log("avgcph= " + this.AVGCOOkiPH);
}





Sales.prototype.render = function () {
  let Table = document.getElementById('table');
  let trElement = document.createElement('tr');
  let tdElement = document.createElement('td');
  tdElement.textContent = this.contry;
  trElement.append(tdElement);
  for (let i = 0; i < this.AVGCOOkiPH.length; i++) {
    tdElement = document.createElement('td');
    tdElement.textContent = this.AVGCOOkiPH[i];
    trElement.append(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = this.total;
  trElement.append(tdElement);
  Table.append(trElement);
}





Sales.prototype.dailyStats = function () {
  this.costPH();
  this.AVGco();
  this.render();
}




function renderH() {
  let trHead = document.getElementById('table');
  trHead = document.createElement('tr');
  let tdElement = document.createElement('td');
  tdElement.textContent = 'Sale Time';
  trHead.append(tdElement);
  for (let i = 0; i < hours.length; i++) {
    let thElement = document.createElement('th');
    thElement.textContent = (hours[i]);
    trHead.append(thElement);
  }
  let tdTotalHead = document.createElement('td');
  tdTotalHead.textContent = 'Daily Location Total';
  trHead.append(tdTotalHead);
  let Table = document.getElementById('table');
  Table.append(trHead);
}




function fCalc() {
  for (let y = 0; y < hours.length; y++) {
    hourlyTotal = 0;
    for (let j = 0; j < Stores.length; j++) {
      hourlyTotal += Stores[j].AVGCOOkiPH[y];
    }
    grandTotal += hourlyTotal;
    hourlyTotalsArray[y] = hourlyTotal;
    console.log("htotarr= " + hourlyTotalsArray);
  }
  console.log("htot= " + hourlyTotal);
}



///////////////
/////////////////

function renderF() {
  let trFoot = document.createElement('tr');
  let tdElement = document.createElement('td');
  tdElement.textContent = 'Hourly totals';
  trFoot.append(tdElement);
  for (let i = 0; i < hourlyTotalsArray.length; i++) {
    let thElement = document.createElement('td');
    thElement.textContent = (hourlyTotalsArray[i]);
    trFoot.append(thElement);
  }
  let tdTotalFoot = document.createElement('td');
  tdTotalFoot.textContent = (grandTotal);
  trFoot.append(tdTotalFoot);
  let referenceTable = document.getElementById('footer');
  referenceTable.append(trFoot);
}


renderH();


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

console.log(Stores);


fCalc();
renderF();

function addNewStore(event) {
  event.preventDefault();
  console.log('Let\'s add a new location!');

  let newStore = event.target.newstorename.value;
  let newMinimumCustomers = event.target.minimumcustomers.value;
  let newMaximumCustomers = event.target.maximumcustomers.value;
  let newAverageSales = event.target.averagecookiessold.value;

  let newStoreAdd = new Sales(newMinimumCustomers, newMaximumCustomers, newAverageSales, newStore);

  newStoreAdd.dailyStats();

  let referenceFooter = document.getElementById('footer');
  referenceFooter.textContent = '';
  grandTotal = 0;

  fCalc();
  renderF();

  let delel1 = event.target.newstorename
  delel1.value = ""
  let delel2=Number(event.target.minimumcustomers)
    delel2.value = ""
    let delel3=Number(event.target.maximumcustomers)
    delel3.value = ""
    let delel4= Number(event.target.averagecookiessold)
    delel4.value = ""


  
}


let cookieFormReference = document.getElementById('cookieform');
cookieFormReference.addEventListener('submit', addNewStore);

