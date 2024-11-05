const leftbtn=document.querySelector(".l-btn");
const rightbtn=document.querySelector(".r-btn");

rightbtn.addEventListener('click',function(event){
    console.log("done");
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft+=1100;
    event.preventDefault();
});
leftbtn.addEventListener('click',function(event){
    console.log("done");
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft-=1100;
    event.preventDefault();
});
const leftbtn1=document.querySelector(".btn-2b");
const rightbtn1=document.querySelector(".btn-2a");

rightbtn1.addEventListener('click',function(event){
    console.log("done");
    const conent = document.querySelector('.product-slide-2');
    conent.scrollLeft+=1100;
    event.preventDefault();
});
leftbtn1.addEventListener('click',function(event){
    console.log("done");
    const conent = document.querySelector('.product-slide-2');
    conent.scrollLeft-=1100;
    event.preventDefault();
});

const leftbtn2=document.querySelector(".btn-1b");
const rightbtn2=document.querySelector(".btn-1a");

rightbtn2.addEventListener('click',function(event){
    console.log("done");
    const conent = document.querySelector('.product-slide-1');
    conent.scrollLeft+=1100;
    event.preventDefault();
});
leftbtn2.addEventListener('click',function(event){
    console.log("done");
    const conent = document.querySelector('.product-slide-1');
    conent.scrollLeft-=1100;
    event.preventDefault();
});
const leftbtn3=document.querySelector(".btn-3b");
const rightbtn3=document.querySelector(".btn-3a");

rightbtn3.addEventListener('click',function(event){
    console.log("done");
    const conent = document.querySelector('.product-slide-3');
    conent.scrollLeft+=1100;
    event.preventDefault();
});
leftbtn3.addEventListener('click',function(event){
    console.log("done");
    const conent = document.querySelector('.product-slide-3');
    conent.scrollLeft-=1100;
    event.preventDefault();
});
const backtop=document.querySelector(".backtop");
backtop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
})
const sidebar=document.querySelector(".sidebar");
const gross=document.querySelector(".fa-xmark");
const black=document.querySelector(".black");
const sidebtn=document.querySelector(".second-1");
sidebtn.addEventListener("click",()=>{
    console.log("open");
    sidebar.classList.add("active");
    gross.classList.add("active");
    black.classList.add("active");
})
gross.addEventListener("click",()=>{
    console.log("close");
    sidebar.classList.remove("active");
    gross.classList.remove("active");
    black.classList.remove("active");
})
const sign=document.querySelector(".ac");
const tri=document.querySelector(".triangle");
const signin=document.querySelector(".hdn-sign");
const tab=document.querySelector(".hdn-table");
sign.addEventListener("click",()=>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
})