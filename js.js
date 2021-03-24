var container = document.createElement("div");   
container.setAttribute("class", "container"); 

  var row = document.createElement("div");   
row.setAttribute("class", "row");             // Create a <li> node

 var hauptCategory = document.createElement("div");   
hauptCategory.setAttribute("id", "hauptGericht");
hauptCategory.setAttribute("class", "col-sm-4");

 var dessertCategory = document.createElement("div");   
dessertCategory.setAttribute("id", "susGericht");
dessertCategory.setAttribute("class", "col-sm-4");

 var experimentCategory = document.createElement("div");   
experimentCategory.setAttribute("id", "neuGericht");
experimentCategory.setAttribute("class", "col-sm-4");



//document.getElementById("rezept").addEventListener("click", rezeptClick);

function rezeptClick()
{
//document.querySelector(".chosen").
  // Get the <ul> element with id="myList"
var list = document.getElementById("list");
//document.getElementById("rezept").addEventListener("click", rezeptClick);

// As long as <ul> has a child node, remove it
while (list.hasChildNodes()) {  
  list.removeChild(list.firstChild);
}
var title = document.createElement("p");   
title.setAttribute("class", "col-sm-12");              // Create a <li> node

var text = document.createTextNode("Gesunde und leckere Rezepte findest du hier!");          // Create a text node

/*var rezepten = document.querySelectorAll("#hauptGericht");
var col = document.querySelector(".row");
col.appendChild(rezepten);
   document.body.appendChild(container); 
*/
var container = document.querySelector("#food");
container.appendChild(row);
   document.body.appendChild(container); 

  
title.appendChild(text);                              // Append the text to <li>

   document.body.appendChild(title); 

var image = document.createElement("img");
   image.setAttribute("src", "froot-loops.jpg");              // Create a <li> node
document.body.appendChild(image);
document.getElementById("rezept").removeEventListener("click", rezeptClick);

w3.show(".nav, .navbar-nav, .navbar-right");

}


var node = document.createElement("li");   
node.setAttribute("class", "article");              // Create a <li> node
var textnode = document.createTextNode("Ausflug nach Potsdam: Park San Suouci");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.querySelector(".article").appendChild(node);     // Append <li> to <ul> with id="myList"

function openArticle(){
  //document.getElementById("rezept").addEventListener("click", rezeptClick);
   document.body.removeChild(container); 


}

function openMalen(){
  //document.getElementById("rezept").addEventListener("click", rezeptClick);
   document.body.removeChild(container); 

}
/*
const radius = 200;
function setup() {
  createCanvas(710, 400, WEBGL);
  noStroke();
  fill(200);
}
function draw() {
  noStroke();
  background(0);
  const dirY = (mouseY / height - 0.5) * 4;
  const dirX = (mouseX / width - 0.5) * 4;
  directionalLight(204, 204, 204, dirX, dirY, 1);
  translate(-1.5 * radius, 0, 0);
  sphere(radius);
  translate(3 * radius, 0, 0);
  sphere(radius);
}
function setup() {
  createCanvas(100, 100);
  noStroke();
  fill(0);
}
function draw() {
  background(204);
  if (mouseIsPressed == true) {
    fill(255); // White
  }
  else {
    fill(0);   // Black
  }
  rect(25, 25, 50, 50);
}
*/