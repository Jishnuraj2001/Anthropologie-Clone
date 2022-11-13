document.querySelector("#home").addEventListener("click",function(){
    window.location.href="index.html";
})

let kart=document.querySelector("#kart").addEventListener("click",function(){
    window.location.href="cart.html";
})



let url="https://636cb9c091576e19e3132cf2.mockapi.io/shoe";
let Data=[];
let cartData=JSON.parse(localStorage.getItem("cart"))||[];
async function getData(){
    try {
        let res= await fetch(url);
    let data=await res.json();
     Data=data;
    displayBox(data);
}catch (error) {
        console.log(error);
    }
}   
getData();


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
        let addtocart=document.createElement("button");
        addtocart.innerText="Add To Cart";
        addtocart.addEventListener("click",function(){
                let count=0;
                for( let i=0;i<cartData.length;i++){
                    if(cartData[i].title==element.title){
                        count++;
                        break;
                    }
                }
                if(count!=0){
                    alert("Product Already in Cart")
                }else{
                    cartData.push(element);
                    localStorage.setItem("cart",JSON.stringify(cartData));
                    alert("Product Added To Cart");
                }
            
        })
        box.append(image,title,price,addtocart);
        document.querySelector("#Pcontainer").append(box);

    });
}

document.querySelector("#search").addEventListener("input",function(){
    let val=document.querySelector("#search").value;
    let filterdata=Data.filter((element)=>{
        return element.title.toLowerCase().includes(val.toLowerCase());
    })
    displayBox(filterdata);
})

document.querySelector("#sort").addEventListener("change",function(){
    let val=document.querySelector("#sort").value;
    if(val==="all"){
        getData();
    }else if(val=="low to high"){
        Data.sort(function(a,b){return a.price-b.price})
        displayBox(Data);
    }else if(val=="high to low"){
        Data.sort(function(a,b){return b.price-a.price})
        displayBox(Data);
    }else if(val=="a-z"){
        Data.sort(function(a,b){return a.title.localeCompare(b.title)})
        displayBox(Data);
    }else if(val=="z-a"){
        Data.sort(function(a,b){return b.title.localeCompare(a.title)})
        displayBox(Data);
    }
})