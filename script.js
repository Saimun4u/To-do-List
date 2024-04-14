const inputBox = document.querySelector('.inputField input');
const addBtn = document.querySelector('.inputField button');
const toList = document.querySelector('.todoList');

inputBox.onkeyup = () => {
  let userData = inputBox.value; //getting user entered value
  if (userData.trim() != 0) {
    //if user values aren't only spaces
    addBtn.classList.add('active'); //activate the add button
  } else {
    addBtn.classList.remove('active'); //unactivate the add button
  }
};

// Set local storage once add button is clicked

addBtn.onclick = () => {
  let userData = inputBox.value; //getting user entered value
  // localStorage.clear(); //reset local storage
  let getLocalStorage = localStorage.getItem('New Todo'); //getting localstorage
  if (getLocalStorage == null) {
    //if localstorage is null
    listArr = []; // creating blank array
  } else {
    listArr = JSON.parse(getLocalStorage); //transforming json string into a js object
  }
  listArr.push(userData); // pushing or adding user data
  localStorage.setItem('New Todo', JSON.stringify(listArr)); // transforming js object into a json string
  showTasks(); //calling showTasks function
};

function showTasks() {
  let getLocalStorage = localStorage.getItem('New Todo'); //getting localstorage
  if (getLocalStorage == null) {
    //if localstorage is null
    listArr = []; // creating blank array
  } else {
    listArr = JSON.parse(getLocalStorage); //transforming json string into a js object
  }
  let newLiTag = '';
  listArr.forEach((element, index) => {
    newLiTag += `<li> ${element}
    <span><i class="fas fa-trash"></i></span>
  </li>`;
  });
  toList.innerHTML = newLiTag; // adding an new li tagg inside ul tag
}
