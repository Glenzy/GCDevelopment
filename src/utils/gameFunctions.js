export function getPositionWithinElement(element, container){
   container = getElementWindowPosition(container);
   element = getElementWindowPosition(element);
  return {element, container};
}

export function getTopPosition(element, container){
   container = getElementWindowPosition(container);
   element = getElementWindowPosition(element);
   return element.top - container.top;
}
export function getLeftPosition(element, container){
   container = getElementWindowPosition(container);
   element = getElementWindowPosition(element);
   return element.left - container.left;
}
export function getRightPosition(element, container){
   container = getElementWindowPosition(container);
   element = getElementWindowPosition(element);
   return container.right - element.right;
}
export function getBottomPosition(element, container){
   container = getElementWindowPosition(container);
   element = getElementWindowPosition(element);
   return container.bottom - element.bottom;
}
export function getElementWindowPosition(htmlElement){
    return htmlElement.getBoundingClientRect();
}
export function getStyle(element){
  let topStyle = window.getComputedStyle(element,null).getPropertyValue("top");
  let leftStyle = window.getComputedStyle(element,null).getPropertyValue("left");
  let position = {top:topStyle, left:leftStyle};
  return position;
}

export function getElementSize(htmlElement){
   return  {height: htmlElement.offsetHeight, width:htmlElement.offsetWidth};
}



/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function valueInRange(value, min, max) {
  return (value <= max) && (value >= min);
}
export function checkRectCollision(A, B) {
  let xOverlap = valueInRange(A.x, B.x, B.x + B.width) ||
  valueInRange(B.x, A.x, A.x + A.width);

  let yOverlap = valueInRange(A.y, B.y, B.y + B.height) ||
  valueInRange(B.y, A.y, A.y + A.height);
  return xOverlap && yOverlap;
}
