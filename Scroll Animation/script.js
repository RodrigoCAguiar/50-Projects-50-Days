const box = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  box.forEach((box) => {
    const topBox = box.getBoundingClientRect().top;

    if (triggerBottom > topBox) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
