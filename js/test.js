let bigCities = ['Ibadan', 'Lagos', 'Abeokuta', 'Osogbo', 'Ife', 'Ilesha', 'Oyo', 'Saki', 'Ogbomosho', 'Ilorin', 'Kuta', 'Iseyin', 'Ijebu-Ode'];
console.log(bigCities);

let cityNumber = bigCities.length;

cityNumber;

let fifthCity = bigCities[4];
console.log(fifthCity);

let updatedCity = bigCities.push('Gbogan', 'Ilaro');
console.log(updatedCity);

// Creating a price list

const list = document.querySelector('.price');

const totalBox = document.querySelector('.new');

let total = 0;
list.innerHTML = '';
totalBox.textContent = '';

let products = ['underpants: 6.99', 'socks: 5.99','T-shirt: 14.99', 'Trousers: 31.99', 'Shoes: 23.99'];

for (let i = 0; i < products.length; i++) {
    let productRange = products[i].split(':');
    let productName = productRange[0];
    let productPrice = Number(productRange[1]);
    total += price;
    let itemText =  productName + ' - $' + productPrice;
    let listItem = document.createElement('h3');
    listItem.textContent = itemText;
    list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + 'Total: $' + total.toFixed(2);