let last_known_scroll_positionY = 0,
    scroll_positionX = -50,
    last_known_scroll_positionX = -50,
    animateLeft = true,
    animationId = null;

window.addEventListener('scroll', function() {
  let isScrolling = false;
  last_known_scroll_positionY = window.scrollY;
  const childList = document.querySelectorAll('.isTop');
  if (!isScrolling) {
    window.requestAnimationFrame(function() {
      //calculateXScroll(scroll_positionX);
      parallax(scroll_positionX, last_known_scroll_positionY);
      fadeMe(childList);
      addNavBarScrollClass();
      isScrolling = false;
    });
  }
  isScrolling = true;
});

/* === Utilities === */
/*function isInView(element) {
  let rect = element.getBoundingClientRect();
  let elementTop = rect.top;
  let elementBottom = rect.bottom;
  let isVisible = (elementTop >= 0) && (elementBottom <= window.innerHeight);
  return isVisible;
}*/

function getPxFromTop(htmlElement) {
  let rect = htmlElement.getBoundingClientRect();
  return rect.top;
}
function addClass(htmlElement, cssClass){
  return htmlElement.classList.add(cssClass);
}
function removeClass(htmlElement, cssClass){
  return htmlElement.classList.remove(cssClass);
}
/*function toggleClass(htmlElement, cssClass){
  return htmlElement.classList.toggle(cssClass);
} */

/* === Actions === */
export function fadeMe(elements) {
  let arrrayOfElements = [...elements];
  arrrayOfElements.forEach(function fadeElementWhenClose(element) {
    let position = getPxFromTop(element);
    let currentOpacity = Math.round(position/10);
    if (position < 100) {
      currentOpacity < 0 ? currentOpacity = 0 : currentOpacity;
      let opacityValue = "0." + currentOpacity;
      currentOpacity === 10 ? opacityValue = 1 : opacityValue;
      return element.style.opacity = opacityValue;
    }
    return element.style.opacity = "1";
  });
}

/*function calculateXScroll(value){
  if(value > 0){
    return xDirection = 'right';
  } else if (value < 0){
    return xDirection = 'left';
  } else {
    return;
  }
}*/

export function Xparallax(){
  if (document.getElementById('parallax') && document.body.clientWidth > 768) {
    let element = document.getElementById('parallax');
    let speedFactor = 0.4;
    let position = animateLeft ? scroll_positionX - speedFactor : scroll_positionX + speedFactor;
    scroll_positionX = position;
    let animationValue = `translate(${position}%, 0)`;
    startAnimation(Xparallax);
    //Here is pretend state. I have set global variables that are set when conditions are met thus immitating state
    if(animateLeft && (scroll_positionX - last_known_scroll_positionX) < -2 ){
      last_known_scroll_positionX  = scroll_positionX;
      stopAnimation();
    }
    if(!animateLeft && (last_known_scroll_positionX - scroll_positionX) < -2 ){
      last_known_scroll_positionX  = scroll_positionX;
      stopAnimation();
    }
    if(scroll_positionX > -56 && scroll_positionX < -49.9){
      return element.style.transform = animationValue;
    } else {
      animateLeft = !animateLeft;
      return stopAnimation();
    }

  }
}
function startAnimation(animationFunction){
  document.body.classList.add('no-overflow');
    animationId = window.requestAnimationFrame(function() {
      animationFunction();
    });
}
function stopAnimation(){

   cancelAnimationFrame(animationId);
   return document.body.classList.add('no-overflow');
}
export function parallax(scroll_positionX, last_known_scroll_positionY) {
  if (document.getElementById('parallax')) { //ensure the element exists
    let element = document.getElementById('parallax');
    let windowHeight = window.innerHeight;
    let elementTop = element.offsetTop;
    let elementHeight = element.offsetHeight;
    let speedFactor = -0.1;
    let ypos = last_known_scroll_positionY;
    let xpos = document.body.clientWidth > 767 ? scroll_positionX : 0;
    let backgroundPositionValueB = `translate(${xpos}%,${Math.round((elementTop - ypos) * speedFactor)}px)`;
    if (elementTop + elementHeight < ypos || elementTop > ypos + windowHeight) {
      return;
    }
    element.style.transform = backgroundPositionValueB;
  } else {
    return;
  }
}

function addNavBarScrollClass(){
  const navbar = document.getElementById('nav');
  const cssClass = "scrolled";
  if(last_known_scroll_positionY > 50){
    return addClass(navbar, cssClass);
  } else if(last_known_scroll_positionY < 50){
    return removeClass(navbar, cssClass);
  } else {
    return;
  }
}
