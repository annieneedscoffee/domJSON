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
for(var key in users[i]){
let tableCell = document.createElement('td');
tableCell.innerHTML = users[i][key];
tableItem.appendChild(tableCell);
}
myTable.appendChild(tableItem);
}
