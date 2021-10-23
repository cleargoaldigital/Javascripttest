let bigCities = ['Ibadan', 'Lagos', 'Abeokuta', 'Osogbo', 'Ife', 'Ilesha', 'Oyo', 'Saki', 'Ogbomosho', 'Ilorin', 'Kuta', 'Iseyin', 'Ijebu-Ode'];
console.log(bigCities);

let cityNumber = bigCities.length;

cityNumber;

let fifthCity = bigCities[4];
console.log(fifthCity);

let updatedCity = bigCities.push('Gbogan', 'Ilaro');
console.log(updatedCity);

// Creating a price list

// const list = document.querySelector('.price');

// const totalBox = document.querySelector('.new');

// let total = 0;
// list.innerHTML = '';
// totalBox.textContent = '';

// let products = ['underpants: 6.99', 'socks: 5.99','T-shirt: 14.99', 'Trousers: 31.99', 'Shoes: 23.99'];

// for (let i = 0; i < products.length; i++) {
//     let productRange = products[i].split(':');
//     let productName = productRange[0];
//     let productPrice = Number(productRange[1]);
//     total += price;
//     let itemText =  productName + ' - $' + productPrice;
//     let listItem = document.createElement('h3');
//     listItem.textContent = itemText;
//     list.appendChild(listItem);
// }

// totalBox.textContent = 'Total: $' + total.toFixed(2);



const list = document.querySelector('.pricelist');
const totalBox = document.querySelector('.totalprice');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';

let products = ['underpants: 6.99', 'socks: 5.99','T-shirt: 14.99', 'Trousers: 31.99', 'Shoes: 23.99'];

for(let i = 0; i < products.length; i++) {
  let subArray = products[i].split(':');
  let name = subArray[0];
  let price = Number(subArray[1]);
  total += price;
  let itemText = name + '' + '' + '' + '' + '' + '' + '' + '— N' + price;

  let listItem = document.createElement('p');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: N' + total.toFixed(3);


// SEARCH BOX

const searcReasult = document.querySelector('.output ul');
const searchInput = document.querySelector('.output input');
const searchBtn = document.querySelector('.output button');

searchResult.innerHTML = '';

let myHistory= [];

searchBtn.onclick = function() {
 if(searchInput.value !== '') {
 myHistory.unshift(searchInput.value);

 searcReasult.innerHTML = '';

 for(let i = 0; i < myHistory.length; i++) {
 itemText = myHistory[i];
 const listItem = document.createElement('li');
 listItem.textContent = itemText;
 searcReasult.appendChild(listItem);
 }

 if(myHistory.length >= 5) {
 myHistory.pop();
 }

 searchInput.value = '';
 searchInput.focus();
 }
}


// Silly Story Generator

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


// add eventListener

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    let name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300);
    let temperature =  Math.round(94);

  }

  story.textContent = '' ;
  story.style.visibility = 'visible';
}