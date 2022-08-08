/* Problem 1 */
let figures = Array.from(document.getElementsByTagName("figure"));
figures.forEach(figure=>{
  figure.classList.add("one-third");
});

/* Problem 2 */
let footer = document.getElementsByTagName("footer").item(0);
footer.addEventListener("click",function(){
  footer.style.display = "none";
});

/* Problem 3 */
figures[4].addEventListener("dblclick",function(event){
  figures[4].style.visibility = "hidden";
});

/* Problem 4 */
let firstFigcaption = document.getElementsByTagName("figcaption").item(0);

let originalFont = window.getComputedStyle(firstFigcaption).fontFamily;

firstFigcaption.addEventListener("mouseenter",changeFontStyle);

firstFigcaption.addEventListener("mouseleave",unChangeFontStyle)

/* Problem 5 */
firstFigcaption.tabIndex = 0;
firstFigcaption.addEventListener("focus",changeFontStyle);
firstFigcaption.addEventListener("blur",unChangeFontStyle);

function changeFontStyle(){
  firstFigcaption.style.fontFamily="cursive";
}
function unChangeFontStyle(){
  firstFigcaption.style.fontFamily=originalFont;
}