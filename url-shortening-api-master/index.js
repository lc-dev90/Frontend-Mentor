const $form = document.querySelector("form");
const $inputLink = document.querySelector("#link");
const $formControl = document.querySelector(".form-control");
const $list = document.querySelector(".list");
const loader = document.querySelector(".loader");
const navlinks = document.querySelector("nav ul");
const navaccess = document.querySelector(".nav-access");
const nav = document.querySelector("nav");

const localStorageLinks = JSON.parse(localStorage.getItem("links"));

let links = localStorage.getItem("links") !== null ? localStorageLinks : [];

const updateLocalStorage = () => {
  localStorage.setItem("links", JSON.stringify(links));
};

const submitFormHandler = (event) => {
  event.preventDefault();
  if ($inputLink.value == "") {
    $inputLink.value = "";
    throwError("Please, add a link!");
    return;
  } else if (!isValidLink($inputLink.value)) {
    $inputLink.value = "";
    throwError("Please, enter valid a link!");
    return;
  }

  $formControl.classList.remove("error");
  createShortLink($inputLink.value);
  $inputLink.value = "";
};

const displayAnimatedLoader = () => {
  loader.classList.remove("hidden");
  loader.style.display = "flex";
};

const removeAnimetedLoader = () => {
  loader.classList.add("hidden");
};

const appenLinkToTheDom = async ({ original_link, full_short_link }) => {
  const $liItem = document.createElement("li");
  $liItem.classList.add("list-item");
  $liItem.innerHTML = `
    <span js-data="original-link">${original_link}</span>  
    <a href="${full_short_link}" target="_blank"><span js-data="short-link">${full_short_link}</span></a>
    <button js-data="button-copy">Copy</button>
    <span class="close" onclick="removeLinkFromList(event)">
      <i class="fas fa-times"></i>
    </span>
  `;
  removeAnimetedLoader();
  $list.appendChild($liItem);
};

const removeLinkFromList = (event) => {
  const targetElement = event.target.parentElement.parentElement;
  if (targetElement.tagName === "LI") {
    const linkRemoved = targetElement.querySelector("a").getAttribute("href");
    links = links.filter((link) => link.full_short_link !== linkRemoved);
    updateLocalStorage();
    targetElement.remove();
    alertify.error("Removed!", 1.3);
  }
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
  const targetElement = event.target;
  if (targetElement.tagName === "BUTTON") {
    const linkCoppied = event.target.parentElement
      .querySelectorAll("a")[0]
      .getAttribute("href");
    const inputTemporary = document.createElement("input");
    targetElement.appendChild(inputTemporary);
    inputTemporary.value = linkCoppied;
    inputTemporary.select();
    document.execCommand("copy");
    inputTemporary.remove();
    event.target.classList.add("copied");
    event.target.textContent = "Copied!";
  }
};

const createShortLink = async (link) => {
  displayAnimatedLoader();
  const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
  const data = await response.json();
  const linkShortened = {
    id: data.result.code,
    original_link: data.result.original_link,
    full_short_link: data.result.full_short_link,
  };
  links.push(linkShortened);
  appenLinkToTheDom(linkShortened);
  updateLocalStorage();
};

$list.addEventListener("click", copyLinkHandler);
$form.addEventListener("submit", submitFormHandler);

// add links to dom if have local storage data persist
window.onload = () => {
  if (links) {
    links.forEach((link) => {
      appenLinkToTheDom(link);
    });
  }
};

window.addEventListener("resize", () => {
  console.log(window.innerWidth);
});

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  navlinks.classList.toggle("mobile");
  navaccess.classList.toggle("mobile");
  nav.classList.toggle("mobile");
});
