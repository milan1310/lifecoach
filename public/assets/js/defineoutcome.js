const upfront = document.querySelector("#first .Upfront");
const ongoing = document.querySelector("#first .Ongoing");
const difficulty = document.querySelector("#first .Difficulty");
const enjoyment = document.querySelector("#first .Enjoyment");
const impact_90 = document.querySelector("#first .Impact_90");
const impact_25 = document.querySelector("#first .Impact_25");

const firstInputs = document.querySelectorAll("input");

const calc = (lineNumber) => {
  const totalInput = document.querySelector(`#${lineNumber} input.${lineNumber}Total`);

  const upfront = document.querySelector(`#${lineNumber} .Upfront`);
  const ongoing = document.querySelector(`#${lineNumber} .Ongoing`);
  const difficulty = document.querySelector(`#${lineNumber} .Difficulty`);
  const enjoyment = document.querySelector(`#${lineNumber} .Enjoyment`);
  const impact_90 = document.querySelector(`#${lineNumber} .Impact_90`);
  const impact_25 = document.querySelector(`#${lineNumber} .Impact_25`);

  let total;
  total =
    parseInt(upfront.value) +
    parseInt(ongoing.value) +
    parseInt(difficulty.value) +
    parseInt(enjoyment.value) +
    parseInt(impact_90.value) +
    parseInt(impact_25.value);

  totalInput.value = total;
};

firstInputs.forEach((c, i) => {
  c.addEventListener("input", () => {
    if (c.classList.contains("firstInputNumber")) {
      calc("first");
    } else if (c.classList.contains("secondInputNumber")) {
      calc("second");
    } else {
      calc("third");
    }
  });
});
