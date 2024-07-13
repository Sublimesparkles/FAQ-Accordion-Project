import iconStar from "./assets/images/icon-star.png";

fetch("./app.json")
  .then((response) => {
    return response.json();
  })
  .then((faqItems) => {
    console.log(faqItems);
  });

const makeFaqContainerElement = () => {
  let faqContainerElement = document.createElement("div");

  faqContainerElement.classList.add("faq-container");
  return faqContainerElement;
};

const makeFaqHeading = () =>{
  const faqHeadingElement = document.createElement("div");
  faqHeadingElement.innerHTML = `<h1><img src="${iconStar}" alt="Star icon"/><span class= "faq-header">FAQs</span></h1>`;
  faqHeadingElement.classList.add("faq-head");
  return faqHeadingElement
}

const makeFaqItemElement = (faqItem) => {
  const { question, answer } = faqItem;
  const faqItemElement = document.createElement("div");
  const faqQuestionElement = document.createElement("p");
  const faqAnswerElement = document.createElement("p");
  const faqToggleElement = document.createElement("button");

  faqQuestionElement.textContent = question;
  faqAnswerElement.textContent = answer;

  faqItemElement.classList.add("faq-item");
  faqQuestionElement.classList.add("faq-item__question");
  faqAnswerElement.classList.add("faq-item__answer");
  faqAnswerElement.setAttribute("role", "region");
  faqAnswerElement.setAttribute("aria-hidden", "true");
  faqToggleElement.classList.add("faq-item__toggle");

  faqToggleElement.addEventListener("click", () => {
    faqItemElement.classList.toggle("open");
    faqAnswerElement.setAttribute("aria-hidden", "false");

  });

  faqItemElement.appendChild(faqQuestionElement);
  faqQuestionElement.appendChild(faqToggleElement);
  faqItemElement.appendChild(faqAnswerElement);

  return faqItemElement;
};
const makeFaq = (faqItems, parentElement) => {
  const container = makeFaqContainerElement();
  const faqHeading = makeFaqHeading();
  container.appendChild(faqHeading);
  faqItems.forEach((item) => {
    const faqItemElement = makeFaqItemElement(item);
    container.appendChild(faqItemElement);
  });
  parentElement.appendChild(container);
};

window.addEventListener("DOMContentLoaded", () => {
  let faqParentElement = document.getElementById("background");

  fetch("./app.json")
    .then((response) => {
      return response.json();
    })
    .then((faqItems) => {
      makeFaq(faqItems, faqParentElement)
      console.log(faqItems);
    });
});
