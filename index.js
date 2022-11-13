let imaged=document.querySelectorAll(".Setd");
imaged.forEach((element)=>{
    element.addEventListener("click",function(){
        window.location.href="dress.html";
    })
})

let imagef=document.querySelectorAll(".Setf");
imagef.forEach((element)=>{
    element.addEventListener("click",function(){
        window.location.href="shoes.html";
    })
})

let kart=document.querySelector("#kart").addEventListener("click",function(){
    window.location.href="cart.html";
})




// slider=====================================================

let productBoxes=document.querySelectorAll(".product-box");
let nxtBtn=document.querySelectorAll(".nxt-btn");
let preBtn=document.querySelectorAll(".pre-btn");

productBoxes.forEach((item,i)=>{
    let boxDimensions=item.getBoundingClientRect();
    let boxWidth=boxDimensions.width;

    nxtBtn[i].addEventListener("click",()=>{
        item.scrollLeft+=boxWidth;
    })
    preBtn[i].addEventListener("click",()=>{
        item.scrollLeft-=boxWidth;
    })
})


// slider end==================================================