'use strict';

let hours = ['6am ', '7am ', '8am ', '9am ', '10am ', '11am ', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];

let Seattle = {
  storeName: 'Seattle',
  maxcost: 65,
  mincost: 23,
  AVGcookiesPH: 3.6,
  NofcostPH: [],
  AVGCOOkiPH: [],
  total: 0,
  costPH: function () {
    for (let i = 0; i < hours.length; i++) {
      let min = Math.ceil(this.mincost);
      let max = Math.floor(this.maxcost);
      let rand = Math.floor(Math.random() * (max - min) + min);
      this.NofcostPH.push(rand);
    }
  },
  AVGcookies: function () {
    for (let i = 0; i < hours.length; i++) {
      this.AVGCOOkiPH[i] = Math.floor(this.NofcostPH[i] * this.AVGcookiesPH);
      this.total += this.AVGCOOkiPH[i];
    }
  },
  render: function () {
    let contener = document.getElementById('contener');
    let h2 = document.createElement('h2');
    contener.appendChild(h2);
    h2.textContent = this.storeName;
    let ul = document.createElement('ul');
    contener.appendChild(ul);
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = ( hours[i] + this.AVGCOOkiPH[i] +'  cookies');
      ul.appendChild(li);
    }
    let totalEl=document.createElement('li');
    totalEl.textContent='  total cookies  ' + this.total ;
    ul.appendChild(totalEl);
  },
}

let STokyo={
  storeName: 'STokyo',
  maxcost:24,
  mincost:3,
AVGcookiesPH:1.2,
NofcostPH: [],
AVGCOOkiPH: [],
total: 0,
costPH: function () {
  for (let i = 0; i < hours.length; i++) {
    let min = Math.ceil(this.mincost);
    let max = Math.floor(this.maxcost);
    let rand = Math.floor(Math.random() * (max - min) + min);
    this.NofcostPH.push(rand);
  }
},
AVGcookies: function () {
  for (let i = 0; i < hours.length; i++) {
    this.AVGCOOkiPH[i] = Math.floor(this.NofcostPH[i] * this.AVGcookiesPH);
    this.total += this.AVGCOOkiPH[i];
  }
},
render: function () {
  let contener = document.getElementById('contener');
  let h2 = document.createElement('h2');
  contener.appendChild(h2);
  h2.textContent = this.storeName;
  let ul = document.createElement('ul');
  contener.appendChild(ul);
  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    li.textContent = ( hours[i] + this.AVGCOOkiPH[i] +'  cookies');
    ul.appendChild(li);
  }
  let totalEl=document.createElement('li');
  totalEl.textContent=this.total +'  total cookies';
  ul.appendChild(totalEl);
},
}

let Dubai={
  storeName: 'Dubai',
  maxcost:38,
  mincost:11,
AVGcookiesPH:3.7,
NofcostPH: [],
AVGCOOkiPH: [],
total: 0,
costPH: function () {
  for (let i = 0; i < hours.length; i++) {
    let min = Math.ceil(this.mincost);
    let max = Math.floor(this.maxcost);
    let rand = Math.floor(Math.random() * (max - min) + min);
    this.NofcostPH.push(rand);
  }
},
AVGcookies: function () {
  for (let i = 0; i < hours.length; i++) {
    this.AVGCOOkiPH[i] = Math.floor(this.NofcostPH[i] * this.AVGcookiesPH);
    this.total += this.AVGCOOkiPH[i];
  }
},
render: function () {
  let contener = document.getElementById('contener');
  let h2 = document.createElement('h2');
  contener.appendChild(h2);
  h2.textContent = this.storeName;
  let ul = document.createElement('ul');
  contener.appendChild(ul);
  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    li.textContent = ( hours[i] + this.AVGCOOkiPH[i] +'  cookies');
    ul.appendChild(li);
  }
  let totalEl=document.createElement('li');
  totalEl.textContent=this.total +'  total cookies';
  ul.appendChild(totalEl);
},
}

let Paris={
  storeName: 'Paris',
  maxcost:38,
  mincost:20,
AVGcookiesPH:2.3,
NofcostPH: [],
AVGCOOkiPH: [],
total: 0,
costPH: function () {
  for (let i = 0; i < hours.length; i++) {
    let min = Math.ceil(this.mincost);
    let max = Math.floor(this.maxcost);
    let rand = Math.floor(Math.random() * (max - min) + min);
    this.NofcostPH.push(rand);
  }
},
AVGcookies: function () {
  for (let i = 0; i < hours.length; i++) {
    this.AVGCOOkiPH[i] = Math.floor(this.NofcostPH[i] * this.AVGcookiesPH);
    this.total += this.AVGCOOkiPH[i];
  }
},
render: function () {
  let contener = document.getElementById('contener');
  let h2 = document.createElement('h2');
  contener.appendChild(h2);
  h2.textContent = this.storeName;
  let ul = document.createElement('ul');
  contener.appendChild(ul);
  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    li.textContent = ( hours[i] + this.AVGCOOkiPH[i] +'  cookies');
    ul.appendChild(li);
  }
  let totalEl=document.createElement('li');
  totalEl.textContent=this.total +'  total cookies';
  ul.appendChild(totalEl);
},
}

let Lima={
  storeName: 'Lima',
  maxcost: 2,
  mincost:16,
AVGcookiesPH:4.6,
NofcostPH: [],
AVGCOOkiPH: [],
total: 0,
costPH: function () {
  for (let i = 0; i < hours.length; i++) {
    let min = Math.ceil(this.mincost);
    let max = Math.floor(this.maxcost);
    let rand = Math.floor(Math.random() * (max - min) + min);
    this.NofcostPH.push(rand);
  }
},
AVGcookies: function () {
  for (let i = 0; i < hours.length; i++) {
    this.AVGCOOkiPH[i] = Math.floor(this.NofcostPH[i] * this.AVGcookiesPH);
    this.total += this.AVGCOOkiPH[i];
  }
},
render: function () {
  let contener = document.getElementById('contener');
  let h2 = document.createElement('h2');
  contener.appendChild(h2);
  h2.textContent = this.storeName;
  let ul = document.createElement('ul');
  contener.appendChild(ul);
  for (let i = 0; i < hours.length; i++) {
    let li = document.createElement('li');
    li.textContent = ( hours[i] + this.AVGCOOkiPH[i] +'  cookies');
    ul.appendChild(li);
  }
  let totalEl=document.createElement('li');
  totalEl.textContent=this.total +'  total cookies';
  ul.appendChild(totalEl);
},
}
Seattle.costPH() + Seattle.AVGcookies() + Seattle.render();
STokyo.costPH() + STokyo.AVGcookies() + STokyo.render();
Dubai.costPH() + Dubai.AVGcookies() + Dubai.render();
Paris.costPH() + Paris.AVGcookies() + Paris.render();
Lima.costPH() + Lima.AVGcookies() + Lima.render();


