document.querySelector("#home").addEventListener("click",function(){
    window.location.href="index.html";
})



let cartData=JSON.parse(localStorage.getItem("cart"));







let sum=0;

displayBox(cartData);
FullPrice();
function displayBox(data){
    document.querySelector("#Pcontainer").innerHTML=null;
    data.forEach((element,index) => {
        
        let box=document.createElement("div");
        
        let image=document.createElement("img");
        image.setAttribute("src",element.image);
        let title=document.createElement("h3");
        title.innerText=element.title;
        let price=document.createElement("p");
        price.innerText=`$ ${element.price}.00`;
        let add_btn=document.createElement("button");
        add_btn.innerText="+";
        add_btn.addEventListener("click",function(){
            span_tag.innerText=+(span_tag.innerText)+1;
            sum=sum+element.price;
            FullPrice();

        })
        let span_tag=document.createElement("span");
        span_tag.innerText="1";
        let rem_btn=document.createElement("button");
        rem_btn.innerText="-";
        rem_btn.addEventListener("click",function(){
            span_tag.innerText=+(span_tag.innerText)-1;
            sum=sum-element.price;
            FullPrice();
            if(span_tag.innerText==="0"){
                data.splice(index,1);
                localStorage.setItem("cart",JSON.stringify(data));
                displayBox(data);
            }
        })
        box.append(image,title,price,rem_btn,span_tag,add_btn);
        document.querySelector("#Pcontainer").append(box);
    });
}




function FullPrice(){
    let total_price=cartData.reduce((acc,el)=>{
        return acc+el.price;
     },0);
     total_price=total_price+sum;
    let Total=document.querySelectorAll(".total");
    for(let i=0;i<Total.length;i++){
        Total[i].innerText=`$${total_price}`;
    }
}




function cutArray(index){
    cartData.splice(index,1);
    localStorage.setItem(JSON.stringify(cartData));
    displayBox(cartData);
}



let user=JSON.parse(localStorage.getItem("account-data"))||[];

document.querySelector("#checkout").addEventListener("click",function(){
    if(user.length==[]){
        alert("please SignUp, or Login if you have an account already");
    }else{
        window.location.href="checkout/checkout.html";
    }
})