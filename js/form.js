// Method for __field text counter__ - FORM PAGE
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

// Method for __creating new cards__ - FORM PAGE

// [ ] Schritt 1: Daten der Eingaben des Users extrahieren
// [ ] Schritt 2: Speichern der Daten in Variablen - mehrere Objects in einem Array
//                -> jedes Object hat die gleichen Key-Value-Paare (Question, Answer, Tag)
// [ ] Schritt 3: Function createNewCard() erstellen, die auf 'submit' reagiert
// [ ] Schritt 4: Mit createElement() jedes einzelne Element der Card nachbauen
//                -> DOM verwenden um HTML Elemente zu erstellen
// [ ] Schritt 5: Funktion erwartet Parameter, die beim Aufruf der Funktion übergeben werden
// [ ] Schritt 6: return-value soll uns HTML zurückgeben (article wahrscheinlich)
// [ ] Schritt 7: Append das neu erstellte HTML Element (Return Wert der Funktion)
//                -> const erstellen für main, um dann mit append-child die neue card es an
//                das main heranhhängen zu können

// const question = document.querySelector('[data-js="questionContent"]');
// const answer = document.querySelector('[data-js="answerContent"]');
// const tag = document.querySelector('[data-js="tag"]');

// let newCardArray = [question, answer, tag];

// newCard.addEventListener("submit", () => {});
