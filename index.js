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

/* https://nervous-poincare-83799d.netlify.app/
Base-Apparel-coming-soon-page 

https://silly-bartik-74813a.netlify.app/
Four-card-feature-section

https://angry-euclid-f18e38.netlify.app/
coding-bootcamp-testimonials-slider-master

https://musing-beaver-285156.netlify.app/
article-preview-component
 */

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

function formatProjectName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
