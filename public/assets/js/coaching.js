let accordion = document.querySelectorAll(".accordion-coaching");

accordion.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active-coaching");
    let panel = item.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});
