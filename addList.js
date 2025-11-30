const input = document.querySelector(".text");
const button = document.querySelector(".btn");
const list = document.querySelector(".list");

button.addEventListener("click",(e)=>{
    e.preventDefault();
    let text = input.value;
    if(!text)return;
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.innerHTML="remove";
    btn.classList.add("remove");
    btn.addEventListener("click",()=>{
        li.remove();
    })
    li.innerHTML=text;
     li.appendChild(btn);
    list.appendChild(li);
})