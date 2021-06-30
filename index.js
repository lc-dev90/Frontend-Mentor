const list = document.getElementById("list");
const reactProjects = [
  {
    name: "rest-countries-api-with-color-theme-switcher-master",
    link: "https://infallible-tereshkova-20a968.netlify.app/",
  },
];

reactProjects.forEach(({ name, link }, i) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
		<a href="${link}">
			<img src="/${name}/helper/design/desktop-design-home-dark.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>
		<div class="links-container">
    <a href="${link}" class="blue">
				<i class="fas fa-eye"></i>
			</a>
		</div>
	`;

  list.appendChild(listItem);
});

const projects = [
  {
    name: "url-shortening-api-master",
  },
  {
    name: "todo-app-main",
  },
  {
    name: "loopstudios-landing-page-main",
  },

  {
    name: "blogr-landing-page-main",
  },
  {
    name: "crowdfunding-product-page-main",
  },
  {
    name: "interactive-pricing-component-main",
  },
  {
    name: "testimonials-grid-section-main",
  },
  {
    name: "fylo-data-storage-component-master",
  },
  {
    name: "ping-coming-soon-page-master",
  },
  {
    name: "huddle-landing-page-with-single-introductory-section-master",
  },
  {
    name: "3-column-preview-card-component-master",
  },
  {
    name: "Faq-accordion-card-main-master",
  },
  {
    name: "Profile-card-component-master",
  },
  {
    name: "social-proof-section-master",
  },
  {
    name: "Stats-preview-card-component-master",
  },
  {
    name: "intro-component-with-signup-form-master",
  },
  {
    name: "single-price-grid-component-master",
  },
];

projects.forEach(({ name }, i) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
		<a href="/${name}/index.html">
			<img src="/${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${i + 2}. ${formatProjectName(name)}</p>
		</a>
		<div class="links-container">
			<a href="/${name}/index.html" class="blue">
				<i class="fas fa-eye"></i>
			</a>
		</div>
	`;

  list.appendChild(listItem);
});

const otherProjects = [
  {
    name: "Base-Apparel-coming-soon-page",
    link: "https://nervous-poincare-83799d.netlify.app/",
    github:
      "https://raw.githubusercontent.com/lc-dev90/Base-Apparel-coming-soon-page/master/design/desktop-design.jpg",
  },
  {
    name: "Four-card-feature-section",
    link: "https://silly-bartik-74813a.netlify.app/",
    github:
      "https://raw.githubusercontent.com/lc-dev90/Four-card-feature-section/master/design/desktop-design.jpg",
  },
  {
    name: "coding-bootcamp-testimonials-slider-master",
    link: "https://angry-euclid-f18e38.netlify.app/",
    github:
      "https://raw.githubusercontent.com/lc-dev90/coding-bootcamp-testimonials-slider-master/master/design/desktop-design.jpg",
  },
  {
    name: "article-preview-component",
    link: "https://musing-beaver-285156.netlify.app/",
    github:
      "https://raw.githubusercontent.com/lc-dev90/article-preview-component/master/design/desktop-design.jpg",
  },
];

otherProjects.forEach(({ name, link, github }, i) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
    <a href="${link}">
			<img src="${github}" alt="${name}" />
			<p>${i + projects.length + 2}. ${formatProjectName(name)}</p>
		</a>
		<div class="links-container">
			<a href="${link}/index.html" class="blue">
				<i class="fas fa-eye"></i>
			</a>
		</div>
  `;

  list.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
