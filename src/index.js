let newProj = document.getElementById("projModal");
let newProjBtn = document.querySelector('#newProj')
let closeBtn = document.getElementsByClassName("close")[0];
let projSub = document.querySelector('.modal-content button')
let projDrop = document.getElementById("project-filter");

let projList = [];

newProjBtn.onclick = function() {
  newProj.style.display = "block";
}

closeBtn.onclick = function() {
  newProj.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == newProj) {
    modal.style.display = "none";
  }
}

projSub.onclick = function () {
  let projName = document.getElementById('projSub'); //Temp Place Value
  let option = document.createElement("option");
  option.text = projName.value;
  document.getElementById('project-filter').appendChild(option);
  let copyArr = Array.from(projDrop);
  projDrop = [...copyArr];
  //console.log(projDrop[0].textContent) -> A test and it works!
  projName.value = "";
  newProj.style.display = "none";
}
