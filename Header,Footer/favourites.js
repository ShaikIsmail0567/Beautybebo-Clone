
let cartdata=JSON.parse(localStorage.getItem("Wishlistcart"))||[];
let container=document.getElementById("wishproducts")
displayproducts(cartdata)

function displayproducts(data){
    container.innerHTML=null;
    data.forEach((element,index) => {
       let div=document.createElement("div");
       let img=document.createElement("img")
    img.src=element.image;
    let name=document.createElement("h2")
    name.innerText=element.title;
    let price=document.createElement("h3")
    price.innerText=`₹${element.price}`
    let cart=document.createElement("button")
    cart.innerText="Add to Cart"
    cart.addEventListener("click",()=>{
        let cartdata=JSON.parse(localStorage.getItem("Addtocart"))||[];
        let cartadded=false;
        for(let i=0;i<cartdata.length;i++){
          if(cartdata[i].id===element.id){
            cartadded=true;
            break;
          }
        }
        if(cartadded==true){
          alert("Product Already in cart")
        } else{
          cartdata.push({...element})
          localStorage.setItem("Addtocart",JSON.stringify(cartdata))
          alert("Product Added To Cart")
        }
        displayproducts(cartdata)
    });
    let deletes =document.createElement("button");
        deletes.innerText="Delete"
        deletes.addEventListener("click",()=>{
          cartdata.splice(index,1)
          localStorage.setItem("Wishlistcart",JSON.stringify(cartdata))
          displayproducts(cartdata)
        })
    div.append(img,name,price,cart,deletes)
    container.append(div)
})
} 