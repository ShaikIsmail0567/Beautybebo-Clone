let userdata=JSON.parse(localStorage.getItem("userdetails"))||[];

let signin=document.getElementById("signinbtn").addEventListener('click', function (elem) {
    let email=document.getElementById("emailinput").value
    let password=document.getElementById("passinput").value
  let logger = new login();
  logger.login(email, password) 
  localStorage.setItem("userdetails", JSON.stringify(userdata))

})
class login{

 login(email, password){
  var count=0;
    userdata.forEach(element => {
        if(email== element.UserEmail && password==element.UserPassword){
            alert("Login Successfull")
            
            window.location.href="index.html"
          }
          if(email== element.UserEmail && password!=element.UserPassword ){
            alert("Wrong Credential")
          }
          if(email!= element.UserEmail ){
            count++
          }  
        });
        if(count==userdata.length){
          alert("User doesn't exist, Sign Up")
          window.location.href="signup.html"
    }
 }

}



