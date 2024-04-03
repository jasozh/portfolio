// Checks if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Activates animation for elements if they scroll into viewport
export function scrollAnimate() {
  var elementList = document.getElementsByClassName("right-not-animated");
  for (const element of elementList) {
    if (isInViewport(element)) {
      element.classList.add("right-animated");
      element.classList.remove("right-not-animated");
    }
  }

  elementList = document.getElementsByClassName("left-not-animated");
  for (const element of elementList) {
    if (isInViewport(element)) {
      element.classList.add("left-animated");
      element.classList.remove("left-not-animated");
    }
  }

  elementList = document.getElementsByClassName("divider-not-animated");
  for (const element of elementList) {
    if (isInViewport(element)) {
      element.classList.add("divider-animated");
      element.classList.remove("divider-not-animated");
    }
  }
}
