const $form = document.querySelector("form");
const $inputLink = document.querySelector("#link");
const $formControl = document.querySelector(".form-control");
const $list = document.querySelector(".list");

/* $list.addEventListener("click", copyLinkHandler); */

const submitFormHandler = (event) => {
  event.preventDefault();
  if ($inputLink.value == "" || !isValidLink($inputLink.value)) {
    throwError("Please, enter valid a link!");
    return;
  }
  $formControl.classList.remove("error");
  createShortLink($inputLink.value);
  $inputLink.value = "";
};

const appenLinkToTheDom = async ({ original_link, full_short_link }) => {
  const $liItem = document.createElement("li");
  $liItem.classList.add("list-item");
  $liItem.innerHTML = `
    <a href="${original_link}" target="_blank"><span js-data="original-link">${original_link}</span></a>      
    <a href="${full_short_link}" target="_blank"><span js-data="short-link">${full_short_link}</span></a>
    <button js-data="button-copy">Copy</button>
  `;
  $list.appendChild($liItem);
};
const throwError = (msg) => {
  $formControl.classList.add("error");
  const small = $formControl.querySelector("small");
  small.textContent = msg;
};

const isValidLink = (link) => {
  let expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  let regex = new RegExp(expression);
  return link.match(regex);
};

/* function copyLinkHandler(e) {
  const copyLink = e.target.parentElement.querySelector(
    '[js-data="short-link"]'
  );
  const input = document.createElement("textarea");
  input.value = copyLink.textContent;
  input.select();
  document.execCommand("copy");
}
 */

const createShortLink = async (link) => {
  const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
  const data = await response.json();
  appenLinkToTheDom(data.result);
};

$form.addEventListener("submit", submitFormHandler);
