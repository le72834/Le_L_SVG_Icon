(() => {
  //this is an IIFE => also an implementation of the module pattern

  //always go and get the elements you're working with
  const mySpan = document.querySelector('main span'),
        myObject = document.querySelector('.svg-img')
  ;


  // functionality goes here => what we want to have happen
  function toggleSelection() {
    // we want to update our UI to make it look like
    // we're making a selection
    //debugger;
    //toggle CSS class to the element with JavaScript
    this.classList.toggle("selected");
    console.log(this.id);
  }


  //figure out what triggers will drive the functionality

  mySpan.addEventListener('click', toggleSelection);
  myObject.addEventListener('click', toggleSelection);


















})()
