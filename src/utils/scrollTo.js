/**
 * ScrollTo utility
 * © https://gist.github.com/james2doyle/5694700
 */
const easeInOutQuad = (t, b, c, d) => {
  if ((t /= d / 2) < 1) {
    return c / 2 * t * t + b;
  }
  return -c / 2 * ((--t) * (t - 2) - 1) + b;
};
// requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
const requestAnimFrame = (() => window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || (callback => window.setTimeout(callback, 1000 / 60)))();

export function scrollTo(to, duration = 500, callback = null) {
  const move = (amount) => {
    document.documentElement.scrollTop = amount;
    document.body.parentNode.scrollTop = amount;
    document.body.scrollTop = amount;
  };
  const start = document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
  const change = to - start;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    move(val);
    if (currentTime < duration) {
      requestAnimFrame(animateScroll);
    } else {
      if (callback && typeof(callback) === 'function') {
        callback();
      }
    }
  };
  animateScroll();
}

export function scrollToElement(toSelector, duration = 500) {
  const element = document.querySelector(toSelector);
  if (!element)
    return;
  scrollTo(element.getBoundingClientRect().top, duration);
}
