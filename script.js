const correctAnswers = ["E", "E", "E", "E"];
const form = document.querySelector(".question-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnsers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  userAnsers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  result.classList.remove("d-none");
  let point = 0;
  const stamp = setInterval(() => {
    result.querySelector("span").textContent = `${point}%`;
    if (point === score) {
      clearInterval(stamp);
    } else {
      point++;
    }
  }, 7);
});
