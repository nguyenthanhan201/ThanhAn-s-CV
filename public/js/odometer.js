function ready() {
  if ("IntersectionObserver" in window) {
    const e = document.getElementById("odometer");

    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        // console.log(entry.isIntersecting);
        if (entry.isIntersecting) {
          setTimeout(function () {
            odometer.innerHTML = 26280;
          }, 500);
        }
      });
    });

    observer.observe(e);
  }
}

window.addEventListener("DOMContentLoaded", ready);
