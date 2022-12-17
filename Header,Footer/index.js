let images=["https://www.beautybebo.com/pub/media/mega-menu/slider-1.jpg",
"https://www.beautybebo.com/pub/media/mega-menu/slider-3.jpg",
"https://www.beautybebo.com/pub/media/mega-menu/slider-2.jpg"];
let x;
start()
  function start() {
    let slideImg = document.querySelector("#slideshow>img");
    let i = 0;
    x = setInterval(function () {
      if (i == images.length) {
        i = 0;
      }
      slideImg.src = images[i++];
      document.getElementById("slideshow").append(slideImg);
    }, 3000);
  }


  let userdata=JSON.parse(localStorage.getItem("userdetails"))
  let name1=document.getElementById("UserName")
  name1.innerText=userdata[0].UserFirstName
  console.log(userdata);
  console.log(name1);
  
