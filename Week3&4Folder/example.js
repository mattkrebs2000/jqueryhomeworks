
const body = document.body;
console.log(body);
const div1 = document.createElement("span");
const div2 = document.createElement("span");
const div3 = document.createElement("span");
const button1 = document.createElement("button");
console.log(div1);
console.log("does anything show up here?", div1.innerText);
console.log(button1)

div1.innerHTML = "hello ";

div2.innerText = " there";

div3.textContent ="!";


button1.name = "joe";
div1.classList.add("trythis");
div2.classList.add("trythis");
div3.classList.add("trythis");
console.log(div1.innerText);

body.prepend(div1);
body.append(div2);
body.append(div3);

  
