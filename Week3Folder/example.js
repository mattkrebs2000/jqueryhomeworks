
const body = document.body;
console.log(body);
const div = document.createElement("div");
console.log(div);
div.innerText = "hello";
div.classList.add("trythis");

body.prepend(div);

  
