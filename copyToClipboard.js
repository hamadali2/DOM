const input = document.querySelector(".text");
const button = document.querySelector(".btn");
button.addEventListener("click",(e)=>{
    e.preventDefault();
    let text = input.value;
    if(!text)return;
    navigator.clipboard.writeText(text)
    .then(()=>{
        console.log("copied");
        button.innerHTML="copied";
        setTimeout(()=>{
            button.innerHTML="copy"
        },2000);
    }).catch(error=>{
        console.error("copy to failed" , error);
    })
})