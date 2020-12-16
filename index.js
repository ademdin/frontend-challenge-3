var questionsLength = document.querySelectorAll(".question").length;

for (var i = 0; i<questionsLength; i++) {

document.querySelectorAll(".question")[i].addEventListener("click", function () {

  this.lastElementChild.classList.toggle("hiddenDiv");
  this.querySelector("h6").classList.toggle("bold");
  this.querySelector("img").classList.toggle("arrow");
});

}
