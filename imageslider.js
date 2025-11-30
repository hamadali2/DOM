const image = document.querySelector(".image");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const pics = [
    "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    "https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_hybrid&w=740&q=80",
    "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=pexels-pixabay-326055.jpg&fm=jpg",
    "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=600&h=400"
];
let index = 0;
image.src=pics[index];
next.addEventListener("click",()=>{
    index = (index+1)%pics.length;
    image.src=pics[index];

});

prev.addEventListener("click",()=>{
    index = (index-1 + pics.length)%pics.length;
    image.src=pics[index];
})