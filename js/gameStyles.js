document.getElementById("button1").onclick = () => {
  document.getElementById("button2").classList.add("animateToRight");
  document.getElementById("button3").classList.add("animateToLeft");
  document.getElementById("button1").classList.add("hide");
};
