const questions = [
  {
    question: "1. What comes next in the pattern: 3, 6, 12, 24, ?",
    options: ["36", "48", "50", "40"],
    answer: "48"
  },
  {
    question: "2. Which of the following is the odd one out?",
    options: ["Circle", "Triangle", "Cube", "Square"],
    answer: "Cube"
  },
  {
    question: "3. What is 15% of 200?",
    options: ["25", "30", "35", "40"],
    answer: "30"
  },
  {
    question: "4. Which letter comes next: A, C, F, J, O, ?",
    options: ["T", "U", "V", "W"],
    answer: "U"
  },
  {
    question: "5. If SOME is coded as PTQG, what is COME?",
    options: ["GTQG", "FPRG", "DPRG", "FPQG"],
    answer: "FPQG"
  },
  {
    question: "6. Which number best completes the analogy: 8:4 as 10:?",
    options: ["5", "3", "7", "2"],
    answer: "5"
  },
  {
    question: "7. What is the missing number in the series: 2, 4, 7, 11, 16, ?",
    options: ["21", "22", "23", "24"],
    answer: "22"
  },
  {
    question: "8. If ALL BLOOPS are RAZZIES and ALL RAZZIES are LUPPIES, are ALL BLOOPS definitely LUPPIES?",
    options: ["Yes", "No", "Only Some", "Can't Tell"],
    answer: "Yes"
  },
  {
    question: "9. Mirror image of 3PM clock shows?",
    options: ["9:00", "3:00", "12:00", "9:00"],
    answer: "9:00"
  },
  {
    question: "10. Find the missing letters: C_D_E_G_?",
    options: ["H", "I", "J", "K"],
    answer: "I"
  }
];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function loadQuestions() {
  const form = document.getElementById("iqForm");
  questions.forEach((q, index) => {
    const shuffledOptions = shuffle([...q.options]);
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `<p>${q.question}</p>` +
      shuffledOptions.map(opt =>
        `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label>`
      ).join('');
    form.appendChild(div);
  });
}

function checkAnswers() {
  let score = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  const iqEstimate = 80 + score * 4; // A playful formula
  const result = document.getElementById("result");
  result.innerHTML = `You answered ${score} out of ${questions.length} correctly.<br>
    Estimated IQ: <strong>${iqEstimate}</strong>`;
}

document.getElementById("submitBtn").addEventListener("click", checkAnswers);
window.onload = loadQuestions;
