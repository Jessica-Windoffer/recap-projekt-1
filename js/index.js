// Method for field text counter
const updateCharacterCount = (inputElement, displayElement, maxLength) => {
  const updateAmountLeft = (value) => {
    displayElement.innerText = value;
  };

  updateAmountLeft(maxLength);

  inputElement.addEventListener("input", () => {
    updateAmountLeft(maxLength - inputElement.value.length);
  });
};

const questionElement = document.querySelector('[data-js="questionContent"]');
const amountLeftQC = document.querySelector('[data-js="charactersLeftQC"]');
const maxLengthQC = questionElement.getAttribute("maxlength");
updateCharacterCount(questionElement, amountLeftQC, maxLengthQC);
console.log(questionElement);
console.log(amountLeftQC);
console.log(maxLengthQC);

const answerElement = document.querySelector('[data-js="answerContent"]');
const amountLeftAC = document.querySelector('[data-js="charactersLeftAC"]');
const maxLengthAC = answerElement.getAttribute("maxlength");
console.log(answerElement);
console.log(amountLeftAC);
console.log(maxLengthAC);
updateCharacterCount(answerElement, amountLeftAC, maxLengthAC);
