// Method for field text counter - FORM PAGE
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

const answerElement = document.querySelector('[data-js="answerContent"]');
const amountLeftAC = document.querySelector('[data-js="charactersLeftAC"]');
const maxLengthAC = answerElement.getAttribute("maxlength");
updateCharacterCount(answerElement, amountLeftAC, maxLengthAC);

// Method for toggle functionality - Bookmark Button - HOME PAGE

// Method for toggle functionality - Answer Button - HOME PAGE

// Method for creating new cards - FORM PAGE
