window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("links").style.fontSize= "14px";
    document.getElementById("linkw").style.fontSize= "14px";
    document.getElementById("linkd").style.fontSize= "14px";
    document.getElementById("linkf").style.fontSize= "14px";
    document.getElementById("linkg").style.fontSize= "14px";
    document.getElementById("logo").style.width = "10%";
  } else {
    document.getElementById("links").style.fontSize= "16px";
    document.getElementById("linkw").style.fontSize= "16px";
    document.getElementById("linkd").style.fontSize= "16px";
    document.getElementById("linkf").style.fontSize= "16px";
    document.getElementById("linkg").style.fontSize= "16px";
    document.getElementById("logo").style.width = "15%";
  }
}