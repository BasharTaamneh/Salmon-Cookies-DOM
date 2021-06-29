'use strict';


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let Stores = [];

function Sales(MinCust, MaxCust, AVGcookiesPH, contry) {
  this.MinCust = MinCust;
  this.MaxCust = MaxCust;
  this.AVGcookiesPH = AVGcookiesPH;
  this.contry = contry;
  this.AVGCOOkiPH = [];
  this.NofcostPH= [];
    this.total = 0;
  Stores.push(this);

}
Sales.prototype.costPH = function () {
  for (let i = 0; i < hours.length; i++) {
    let min = Math.ceil(this.mincost);
    let max = Math.floor(this.maxcost);
    let random = Math.floor(Math.random() * (max - min)) + min;
    this.NofcostPH= [];
    this.NofcostPH.push(random);
  }
  console.log(this.NofcostPH);
}

  Sales.prototype.AVGcookies = function () {
    for (let i = 0; i < hours.length; i++) {
      this.AVGCOOkiPH[i] = Math.floor(this.NofcostPH[i] * this.AVGcookiesPH);
      this.total += this.AVGCOOkiPH[i];
    }
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
      this.AVGcookies();
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

