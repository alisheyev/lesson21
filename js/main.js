window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").style.padding = "20px 0px";
  } else {
    document.getElementById("header").style.padding = "25px 0px";
  }
}

function openNavbar() {
    document.getElementById("navbar-responsive").style.right = "0";
  }
  function closeNavbar() {
    document.getElementById("navbar-responsive").style.right = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);