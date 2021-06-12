const $form = document.querySelector("form");
const $inputLink = document.querySelector("#link");
const $formControl = document.querySelector(".form-control");
const $list = document.querySelector(".list");

const localStorageLinks = JSON.parse(localStorage.getItem("links"));

let links = localStorage.getItem("links") !== null ? localStorageLinks : [];

const updateLocalStorage = () => {
  localStorage.setItem("links", JSON.stringify(links));
};

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

const copyLinkHandler = (event) => {
  if (event.target.tagName === "BUTTON") {
    const linkCoppied = event.target.parentElement
      .querySelectorAll("a")[1]
      .getAttribute("href");
    const inputTemporary = document.createElement("input");
    event.target.appendChild(inputTemporary);
    inputTemporary.value = linkCoppied;
    inputTemporary.select();
    document.execCommand("copy");
    inputTemporary.remove();
  }
};

const createShortLink = async (link) => {
  const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
  const data = await response.json();
  const linkShortened = {
    id: data.result.code,
    original_link: data.result.original_link,
    full_short_link: data.result.full_short_link,
  };
  links.push(linkShortened);
  appenLinkToTheDom(data.result);
  updateLocalStorage();
};

$list.addEventListener("click", copyLinkHandler);
$form.addEventListener("submit", submitFormHandler);
window.onload = () => {
  if (links) {
    links.forEach((link) => {
      appenLinkToTheDom(link);
    });
  }
};
