






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
