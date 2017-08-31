let users = [
  {
    firstName: "troy",
    lastName: "amelotte",
    age: 12,
    email: "troy@amelotte.com",
    location: "PHX"
  },
  {
    firstName: "kevin",
    lastName: "bacon",
    age: 13,
    email: "kevin@amelotte.com",
    location: "LA"
  },
  {
    firstName: "bjorn",
    lastName: "luke",
    age: 20,
    email: "asdf@asdf.com",
    location: "NY"
  },
  {
    firstName: "rahul",
    lastName: "lastname",
    age: 23,
    email: "ra@hul.com",
    location: "PHX"
  }
]

// Use the list of users above. Populate the unordered list with all the users
// that are located in phx. Then populate the table below it with all the users.

let unlist = document.getElementsByTagName('ul')[0];
for(i=0;i<users.length;i++){
  let listItem = document.createElement('li');
  listItem.innerHTML = users[i]['firstName'] + ' ' + users[i]['lastName'];
  if(users[i]['location']==='PHX'){
  unlist.appendChild(listItem);
}
}


let myTable = document.getElementsByTagName('tbody')[0];
for(i=0;i<users.length;i++){
let tableItem = document.createElement('tr');
let tableCell = document.createElement('td');
let tableCell2 = document.createElement('td');
let tableCell3 = document.createElement('td');
let tableCell4 = document.createElement('td');
let tableCell5 = document.createElement('td');
tableCell.innerHTML = users[i]['firstName'];
tableCell2.innerHTML = users[i]['lastName'];
tableCell3.innerHTML = users[i]['age'];
tableCell4.innerHTML = users[i]['email'];
tableCell5.innerHTML = users[i]['location'];
tableItem.appendChild(tableCell);
tableItem.appendChild(tableCell2);
tableItem.appendChild(tableCell3);
tableItem.appendChild(tableCell4);
tableItem.appendChild(tableCell5);
myTable.appendChild(tableItem);
}
