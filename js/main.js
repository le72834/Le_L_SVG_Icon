// this is a self-invoking anonymous function
// also called an (function() {
// also called a module


(() => {
  console.log("some message - from JavaScript");
// find the button element on the page by its ID with JavaScript
  let theButton = document.querySelector("#myButton"),
      theHeading = document.querySelector('h1'),
      svgImage = document.querySelector("#svgGraphic");

  // this is function changes the heading text

  function changeText() {
    theHeading.textContent ="Hello World";
  }

  //log the id of the svg to the console when user hovers on it
  function logSVG() {
    console.log(this.id);
  }

  theButton.addEventListener("click", changeText);

  svgImage.addEventListener("mouseover", logSVG);

  //document.querySelector('h1').textContent ="Hello World";



})();
