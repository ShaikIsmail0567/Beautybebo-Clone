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

  let userdetails=JSON.parse(localStorage.getItem("userdetails"))
  console.log(userdetails)
  let name=document.getElementById("UserName")
  name.innerText=userdetails[0].UserFirstName
