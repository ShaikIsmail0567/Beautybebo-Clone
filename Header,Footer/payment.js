

let obj = JSON.parse(localStorage.getItem("userdata"));

let name = document.querySelector("#name")
name.innerText = obj.first_name + " " + obj.last_name;
let address = document.querySelector("#address")
address.innerText = obj.street;
let state = document.querySelector("#district")
state.innerText = obj.state;
let number = document.querySelector("#number")
number.innerText = obj.number;
let Totalprice = localStorage.getItem("totalamt");

//  let Totalprice = localStorage.getItem("Totalprice")

document.getElementById("total").innerText = (Number(Totalprice)).toFixed(2)


document.getElementById("gst").innerText = (Number(Totalprice) / 6.5).toFixed(2)
document.getElementById("withgst").innerText = (Number(Totalprice)).toFixed(2)

document.getElementById("withoutgst").innerText = ((Number(Totalprice)).toFixed(2) - (Number(Totalprice) / 6.5).toFixed(2))


let vari = document.getElementById("COD").value
let db = document.getElementById("DB").value
function thanku() {


    if (vari === "COD" || db === "DB") {
       alert("Your Order Has Been Placed Successfully")
       window.location.href="index.html"
    }
    else {
        // alert("Please Select a payment method")
        console.log("okay");
     
    }

}
let amnt = localStorage.getItem("totalamt");
dis(amnt);
function dis(amnt) {
    if (amnt === null) {
        document.getElementById("cartprice").innerText = "0.0"
    }
    else {
        document.getElementById("cartprice").innerHTML = amnt;
    }
}