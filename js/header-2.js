const header = document.querySelector("header");
const headerLogo = document.getElementById("header-logo__img");

function headerDropdown() {
    header.classList.add("over");
    header.style.backgroundColor = "rgba(243, 243, 243)"
    headerLogo.src = "src/justcompany-logo.svg";
    header.style.height = "245px"
    header.style.transition = "height 0.7s ease-in-out"
}

function headerDropup() {
  header.classList.remove("over");
  header.style.height = "100px"
  header.style.transition = "height 0s ease-in-out"
  
  let nowScrollTop = window.scrollY;
  if (nowScrollTop < 10){
    header.style.backgroundColor = "rgba(243, 243, 243,00)"
  }
  else {
    headerLogo.src = "src/justcompany-logo.svg";
  }
}

let prevScrollTop = 0;
window.addEventListener("scroll", function() {
  let nowScrollTop = window.scrollY;
  if (nowScrollTop > prevScrollTop){
    //스크롤 내림
        header.style.transform = "translateY(-100px)"
        console.log('Down!');
        header.style.height = "100px"
        header.style.transition = "height 0s ease-in-out"
        header.style.transition = "transform 0.7s ease-in-out"
  }
  else if(nowScrollTop < prevScrollTop){
    //스크롤 올림
    header.style.transform = "translateY(0px)"
    header.style.backgroundColor = "rgba(243, 243, 243)"
    console.log('Up!');
    headerLogo.src = "src/justcompany-logo.svg";
    header.style.height = "100px"
    header.style.transition = "height 0s ease-in-out"
    header.style.transition = "transform 0.7s ease-in-out"
  }
    prevScrollTop = nowScrollTop;

    if (nowScrollTop < 10){
      header.style.backgroundColor = "rgba(243, 243, 243,00)"
    }
  });

header.addEventListener("mouseover", headerDropdown);
header.addEventListener("mouseleave", headerDropup);





/* function headerToggle() {
  header.classList.toggle("active");
  header.querySelector(".header__logo img").classList.toggle("active");
}

function handleResize() {
  const width = window.innerWidth;
  if (header.classList.contains("active")) {
    if (width > 900) {
      header.classList.remove("active");
    } else {
      header.classList.add("active");
    }
  }
} */

/* hamburgerBtn.addEventListener("click", headerToggle);
window.addEventListener("resize", handleResize); */