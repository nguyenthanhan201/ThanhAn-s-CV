const isVisible = (elemID) => {
  const e = document.getElementById("odometer");
  console.log("👌 ~ e", e);
  if (!e) return false; //Not exisiting
  if (e.offsetWidth > 0 && e.offsetHeight > 0) return true; //Height of invisible components are zero
  return false;
};

function isHidden(el) {
  return el.offsetParent === null;
}

function isElementInViewport(el) {
  // Special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /* or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /* or $(window).width() */
  );
}

window.addEventListener("scroll", function () {
  // console.log();
  if (isElementInViewport(document.getElementById("odometer")) == true) {
    setTimeout(function () {
      odometer.innerHTML = 26280;
    }, 1000);
  }
});
