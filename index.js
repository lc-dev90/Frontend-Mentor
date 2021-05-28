const projects = [
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
  {
    name: "blogr-landing-page-main",
  },
];
const otherProjects [ 
{
  name: "Base-Apparel-coming-soon-page",
  link: "https://nervous-poincare-83799d.netlify.app/"
},
{
  name: "Four-card-feature-section",
  link: "https://silly-bartik-74813a.netlify.app/"
},
{
  name: "coding-bootcamp-testimonials-slider-master",
  link: "https://angry-euclid-f18e38.netlify.app/"
},
{
  name: "article-preview-component",
  link: "https://musing-beaver-285156.netlify.app/"
}
];

const list = document.getElementById("list");

projects.forEach(({ name }, i) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
		<a href="/${name}/index.html">
			<img src="/${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>
		<div class="links-container">
			<a href="/${name}/index.html" class="blue">
				<i class="fas fa-eye"></i>
			</a>
		</div>
	`;

  list.appendChild(listItem);
});
otherProjects.forEach(({name, link} i) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
    <a href="/${link}/index.html">
			<img src="/${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>
		<div class="links-container">
			<a href="/${link}/index.html" class="blue">
				<i class="fas fa-eye"></i>
			</a>
		</div>
  `
})


function formatProjectName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
