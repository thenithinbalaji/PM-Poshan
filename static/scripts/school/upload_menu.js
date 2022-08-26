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
  "None": 0,
  "Rice": 200,
  "Dal":100,
  "Sambhar":243,
  "Rasam":345,
  "Pepper Egg": 343,
  "Tomato Masala Egg": 124,
  "Boiled Egg":343,
  "Vegetable Biriyani": 241,
  "Black Bengal Gram Pulav": 475,
  "Tomato Rice": 200
}

pro = {
  "None": 0,
  "Rice": 20,
  "Dal":10,
  "Sambhar":23,
  "Rasam":35,
  "Pepper Egg": 33,
  "Tomato Masala Egg": 12,
  "Boiled Egg":33,
  "Vegetable Biriyani": 21,
  "Black Bengal Gram Pulav": 75,
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

document.getElementById("sidedish1").onclick = function(){
  
  console.log(document.getElementById("sidedishqty1").value)

  document.getElementById("sidedishcal1").value = document.getElementById("sidedishqty1").value * cal[document.getElementById("sidedish1").value]
  document.getElementById("sidedishpro1").value = document.getElementById("sidedishqty1").value * pro[document.getElementById("sidedish1").value]

}

document.getElementById("extras1").onclick = function(){
  
  console.log(document.getElementById("extrasqty1").value)

  document.getElementById("extrascal1").value = document.getElementById("extrasqty1").value * cal[document.getElementById("extras1").value]
  document.getElementById("extraspro1").value = document.getElementById("extrasqty1").value * pro[document.getElementById("extras1").value]

}

document.getElementById("maindish2").onclick = function(){
  
  console.log(document.getElementById("maindishqty2").value)

  document.getElementById("maindishcal2").value = document.getElementById("maindishqty2").value * cal[document.getElementById("maindish2").value]
  document.getElementById("maindishpro2").value = document.getElementById("maindishqty2").value * pro[document.getElementById("maindish2").value]

}

document.getElementById("sidedish2").onclick = function(){
  
  console.log(document.getElementById("sidedishqty2").value)

  document.getElementById("sidedishcal2").value = document.getElementById("sidedishqty2").value * cal[document.getElementById("sidedish2").value]
  document.getElementById("sidedishpro2").value = document.getElementById("sidedishqty2").value * pro[document.getElementById("sidedish2").value]

}

document.getElementById("extras2").onclick = function(){
  
  console.log(document.getElementById("extrasqty2").value)

  document.getElementById("extrascal2").value = document.getElementById("extrasqty2").value * cal[document.getElementById("extras2").value]
  document.getElementById("extraspro2").value = document.getElementById("extrasqty2").value * pro[document.getElementById("extras2").value]

}


document.getElementById("maindish3").onclick = function(){
  
  console.log(document.getElementById("maindishqty3").value)

  document.getElementById("maindishcal3").value = document.getElementById("maindishqty3").value * cal[document.getElementById("maindish3").value]
  document.getElementById("maindishpro3").value = document.getElementById("maindishqty3").value * pro[document.getElementById("maindish3").value]

}

document.getElementById("sidedish3").onclick = function(){
  
  console.log(document.getElementById("sidedishqty3").value)

  document.getElementById("sidedishcal3").value = document.getElementById("sidedishqty3").value * cal[document.getElementById("sidedish3").value]
  document.getElementById("sidedishpro3").value = document.getElementById("sidedishqty3").value * pro[document.getElementById("sidedish3").value]

}

document.getElementById("extras3").onclick = function(){
  
  console.log(document.getElementById("extrasqty3").value)

  document.getElementById("extrascal3").value = document.getElementById("extrasqty3").value * cal[document.getElementById("extras3").value]
  document.getElementById("extraspro3").value = document.getElementById("extrasqty3").value * pro[document.getElementById("extras3").value]

}

document.getElementById("maindish4").onclick = function(){
  
  console.log(document.getElementById("maindishqty4").value)

  document.getElementById("maindishcal4").value = document.getElementById("maindishqty4").value * cal[document.getElementById("maindish4").value]
  document.getElementById("maindishpro4").value = document.getElementById("maindishqty4").value * pro[document.getElementById("maindish4").value]

}

document.getElementById("sidedish4").onclick = function(){
  
  console.log(document.getElementById("sidedishqty4").value)

  document.getElementById("sidedishcal4").value = document.getElementById("sidedishqty4").value * cal[document.getElementById("sidedish4").value]
  document.getElementById("sidedishpro4").value = document.getElementById("sidedishqty4").value * pro[document.getElementById("sidedish4").value]

}

document.getElementById("extras4").onclick = function(){
  
  console.log(document.getElementById("extrasqty4").value)

  document.getElementById("extrascal4").value = document.getElementById("extrasqty4").value * cal[document.getElementById("extras4").value]
  document.getElementById("extraspro4").value = document.getElementById("extrasqty4").value * pro[document.getElementById("extras4").value]

}

document.getElementById("maindish5").onclick = function(){
  
  console.log(document.getElementById("maindishqty5").value)

  document.getElementById("maindishcal5").value = document.getElementById("maindishqty5").value * cal[document.getElementById("maindish5").value]
  document.getElementById("maindishpro5").value = document.getElementById("maindishqty5").value * pro[document.getElementById("maindish5").value]

}

document.getElementById("sidedish5").onclick = function(){
  
  console.log(document.getElementById("sidedishqty5").value)

  document.getElementById("sidedishcal5").value = document.getElementById("sidedishqty5").value * cal[document.getElementById("sidedish5").value]
  document.getElementById("sidedishpro5").value = document.getElementById("sidedishqty5").value * pro[document.getElementById("sidedish5").value]

}

document.getElementById("extras5").onclick = function(){
  
  console.log(document.getElementById("extrasqty5").value)

  document.getElementById("extrascal5").value = document.getElementById("extrasqty5").value * cal[document.getElementById("extras5").value]
  document.getElementById("extraspro5").value = document.getElementById("extrasqty5").value * pro[document.getElementById("extras5").value]

}


function checkStatus() {

        receivedData = {
            'Sambhar and Rice': 1,
            'Curd': 1,
            'Banana Side Dish': 2,
            'Friums': 1
        }
        foodData = [{ "food": "Bisibelebath", "gm_protein": 8.2, "calorie": 380, "type": "Secondary" }, { "food": "Black Bengal Gram Pulav", "gm_protein": 6.1, "calorie": 475, "type": "Secondary" }, { "food": "Boiled Egg", "gm_protein": 6.0, "calorie": 77, "type": "Secondary" }, { "food": "Fried Potato", "gm_protein": 3.4, "calorie": 300, "type": "Secondary" }, { "food": "Lemon Rice", "gm_protein": 2.6, "calorie": 179, "type": "Secondary" }, { "food": "Masala Egg", "gm_protein": 6.5, "calorie": 150, "type": "Secondary" }, { "food": "Mixed mealmaker and Vegetable Rice", "gm_protein": 9.4, "calorie": 225, "type": "Secondary" }, { "food": "Onion Tomato Masala Egg", "gm_protein": 7.3, "calorie": 180, "type": "Secondary" }, { "food": "Pepper Egg", "gm_protein": 6.09, "calorie": 122, "type": "Secondary" }, { "food": "Rice", "gm_protein": 2.9, "calorie": 200, "type": "Secondary" }, { "food": "Sambar", "gm_protein": 7.1, "calorie": 139, "type": "Secondary" }, { "food": "Spinach\/Curry Rice", "gm_protein": 8.5, "calorie": 235, "type": "Secondary" }, { "food": "Sundal", "gm_protein": 4.4, "calorie": 111, "type": "Secondary" }, { "food": "Tamarind Rice", "gm_protein": 3.3, "calorie": 185, "type": "Secondary" }, { "food": "Tomato Masala Egg", "gm_protein": 7.3, "calorie": 175, "type": "Secondary" }, { "food": "Tomato Rice", "gm_protein": 4.1, "calorie": 266, "type": "Secondary" }, { "food": "Vegetable Biryani", "gm_protein": 8.9, "calorie": 241, "type": "Secondary" }, { "food": "Bisibelebath", "gm_protein": 4.0, "calorie": 95, "type": "Primary" }, { "food": "Black Bengal Gram Pulav", "gm_protein": 4.0, "calorie": 133, "type": "Primary" }, { "food": "Boiled Egg", "gm_protein": 4.0, "calorie": 80, "type": "Primary" }, { "food": "Fried Potato", "gm_protein": 4.0, "calorie": 121, "type": "Primary" }, { "food": "Lemon Rice", "gm_protein": 5.0, "calorie": 111, "type": "Primary" }, { "food": "Masala Egg", "gm_protein": 3.0, "calorie": 130, "type": "Primary" }, { "food": "Mixed mealmaker and Vegetable Rice", "gm_protein": 3.0, "calorie": 91, "type": "Primary" }, { "food": "Onion Tomato Masala Egg", "gm_protein": 5.0, "calorie": 72, "type": "Primary" }, { "food": "Pepper Egg", "gm_protein": 5.0, "calorie": 93, "type": "Primary" }, { "food": "Rice", "gm_protein": 3.0, "calorie": 101, "type": "Primary" }, { "food": "Sambar", "gm_protein": 5.0, "calorie": 140, "type": "Primary" }, { "food": "Spinach\/Curry Rice", "gm_protein": 5.0, "calorie": 128, "type": "Primary" }, { "food": "Sundal", "gm_protein": 5.0, "calorie": 134, "type": "Primary" }, { "food": "Tamarind Rice", "gm_protein": 3.0, "calorie": 139, "type": "Primary" }, { "food": "Tomato Masala Egg", "gm_protein": 4.0, "calorie": 80, "type": "Primary" }, { "food": "Tomato Rice", "gm_protein": 3.0, "calorie": 127, "type": "Primary" }, { "food": "Vegetable Biryani", "gm_protein": 4.0, "calorie": 103, "type": "Primary" }, { "food": "Sambhar and Rice", "gm_protein": 10.0, "calorie": 339, "type": "Secondary" }, { "food": "Curd", "gm_protein": 4.5, "calorie": 90, "type": "Secondary" }, { "food": "Banana Side Dishs", "gm_protein": 3.5, "calorie": 120, "type": "Secondary" }, { "food": "Friums", "gm_protein": 3.0, "calorie": 250, "type": "Secondary" }, { "food": "Sambhar and Rice", "gm_protein": 7.0, "calorie": 140, "type": "Primary" }, { "food": "Curd", "gm_protein": 3.5, "calorie": 117, "type": "Primary" }, { "food": "Banana Side Dishs", "gm_protein": 3.5, "calorie": 93, "type": "Primary" }, { "food": "Friums", "gm_protein": 4.0, "calorie": 69, "type": "Primary" }];
        let totalCals = 0;
        let prots = 0;
        for (let i = 0; i < receivedData.length; i++) {
            if (foodData[i].food in receivedData) {
                totalCals += foodData[i].calorie * receivedData[foodData[i]];
                prots += foodData[i].calorie * receivedData[foodData[i]];
            }
        }

        message = ''
        if (totalCals < 7000) {
            message += "Daily Calorie Requirements not met";
        }
        if (prots < 200) {
            message += "\nDaily Protein Requirements not met";
        }

        alert(message)
    }


