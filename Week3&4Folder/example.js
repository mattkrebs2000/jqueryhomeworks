const body = document.body;
console.log(body);
const div1 = document.createElement("div");
const div2 = document.createElement("span");
const div3 = document.createElement("span");
const div4 = document.createElement("span");

const websitediv = document.createElement("div");
websitediv.setAttribute("id", "page");
const websitediv2 = document.createElement("div");
websitediv2.setAttribute("id", "bar");
websitediv.appendChild(websitediv2);

const list = document.createElement("ul");
const names = document.getElementById("newId");
const listofnames = ["water", "air", "gas"];

const listofsections = [
  "home",
  "about",
  "portfolio",
  "prices",
  "products",
  "faq",
  "contact",
];

console.log(list, names);
const button1 = document.createElement("button");
console.log("see this first", div1);
console.log("See this", div1.innerText);
console.log(button1);

div1.innerHTML = "hello ";
div1.innerHTML = "<span>hello </span>";

div2.innerText = " there";

div3.textContent = "!";

div4.textContent = "don't forget";

listofnames.forEach((element) => {
  var node = document.createElement("LI"); // Create a <li> node
  var textnode = document.createTextNode(element); // Create a text node
  node.appendChild(textnode); // Append the text to <li>
  names.append(node);
});

listofsections.forEach((element) => {
  const amaker = document.createElement("a");

  amaker.setAttribute("href", "#");
  var textnode = document.createTextNode(element); 

  amaker.append(textnode);

  websitediv2.append(amaker);
 
});

button1.name = "joe";
div1.classList.add("trythis");
div2.classList.add("trythis");
div3.classList.add("trythis");
div1.appendChild(div4);
console.log(div1.innerText);

body.prepend(div3);
body.prepend(div2);
body.prepend(div1);
body.prepend(websitediv);
