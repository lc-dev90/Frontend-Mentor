const questionElement = document.querySelectorAll(".question");
const faqControlsElements = document.querySelectorAll(".faq-control");

questionElement.forEach((question, idx) => {
  question.addEventListener("click", function () {
    const faqControl = question.parentElement;
    faqControlsElements.forEach((faqControlElement, idxElement) => {
      if (idx !== idxElement) {
        faqControlElement.classList.add("closed");
      }
    });
    faqControl.classList.toggle("closed");
  });
});

// iterar sobre cada pergunta
// adicionar um listener de click a cada pergunta
// quando clicado adiciona classe closed ao seu elemento pai faq-control
// e remove todas as classes closed se houver dos outros elementos faq-control
//desafio
