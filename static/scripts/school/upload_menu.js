// document.getElementById("additembutton").onclick = function() {
//   var container = document.getElementById("menucontainer");
//   var section = document.getElementById("mainsection");
//   container.appendChild(section.cloneNode(true));
// }

// document.getElementById("removeitembutton").onclick = function() {
//   var container = document.getElementById("menucontainer");
//   var section = document.getElementById("mainsection");
//   container.removeChild(section);
// }

cal = {
  "Rice": 200,
  "Vegetable Biriyani": 241,
  "Black Bengal Gram Pulav": 475,
  "Tomato Rice": 200
}

pro = {
  "Rice": 20,
  "Vegetable Biriyani": 24,
  "Black Bengal Gram Pulav": 45,
  "Tomato Rice": 20
}


window.onload = function(){ 
  document.getElementById("current_date").innerHTML = Date(); 
};


document.getElementById("maindish1").onclick = function(){
  
  console.log(document.getElementById("maindishqty1").value)

  document.getElementById("maindishcal1").value = document.getElementById("maindishqty1").value * cal[document.getElementById("maindish1").value]
  document.getElementById("maindishpro1").value = document.getElementById("maindishqty1").value * pro[document.getElementById("maindish1").value]

}