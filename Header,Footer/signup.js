document.querySelector("form").addEventListener("submit",usercreate)

let userdata=JSON.parse(localStorage.getItem("userdetails"))||[];
let form=document.querySelector("form")
function usercreate(){
  event.preventDefault()
  let jobObj={
    UserFirstName: form.fname.value,
    UserLastName: form.lname.value,
    UserEmail: form.Email.value,
    UserPhone: form.Num.value,
    UserPassword: form.pass.value,
    UserConfirmPassword:form.confirmpass.value
  }
  userdata.push(jobObj)
  localStorage.setItem("userdetails",JSON.stringify(userdata))
  alert("Account has been created Sucessfully")
  window.location.href="login.html"
}
