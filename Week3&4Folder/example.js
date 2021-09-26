
const body = document.body;
console.log(body);
const div1 = document.createElement("span");
const div2 = document.createElement("span");
const div3 = document.createElement("span");
const list = document.createElement("ul");
const names = document.getElementById("newId");
const listofnames = ["water", "air", "gas"]
console.log(list, names);
const button1 = document.createElement("button");
console.log(div1);
console.log("does anything show up here?", div1.innerText);
console.log(button1);

// div1.innerHTML = "hello ";
div1.innerHTML = "<span>hello </span>"

div2.innerText = " there";

div3.textContent ="!";


listofnames.forEach(element => {
    var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode(element);         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
names.append(node);
});

button1.name = "joe";
div1.classList.add("trythis");
div2.classList.add("trythis");
div3.classList.add("trythis");
console.log(div1.innerText);


body.prepend(div3);
body.prepend(div2);
body.prepend(div1);



  
