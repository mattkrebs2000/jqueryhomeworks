
const body = document.body;
console.log(body);
const div = document.createElement("div");
console.log(div);
console.log(div.innerText);
div.innerText = "hello";
div.classList.add("trythis");
console.log(div.innerText);

body.prepend(div);

  
