const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");

const socialsList = document.getElementById("social-items");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

const projects = [
  {
    id: 1,
    title: "Book Verse",
    description:
      "Discover and explore books using the Google Books API with real-time search and detailed book information.",
    tech: ["HTML", "CSS", "JS", "REACT.JS", "TAILWIND.CSS"],
    image: "./images/projects/bookverse.png",
    github: "https://github.com/shellipal/BookVerse",
    live: "https://bookverseapp.vercel.app/",
  },
  {
    id: 2,
    title: "Recipe Finder",
    description:
      "Find recipes instantly with a user-friendly interface, detailed ingredients, and cooking instructions.",
    image: "./images/projects/recipe.png",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/shellipal/Recipe",
    live: "https://shellipal.github.io/Recipe",
  },
  {
    id: 3,
    title: "Random Image Generator",
    description:
      "Generate random images dynamically through API integration and responsive web design.",
    image: "./images/projects/imggen.png",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/shellipal/Random-Images",
    live: "https://shellipal.github.io/Random-Images/",
  },
];

const projectsList = document.getElementById("project-list");

projectsList.innerHTML = projects
  .map(
    (project, i) =>
      `
    <div class="project-card">
                <img src=${project.image}
                    alt=${project.title} />

                <div class="card-info">
                    <h1 class="card-title">${project.title}</h1>
                    <p class="card-desc">${project.description}</p>
                    <p class="card-hash">
                        ${project.tech.map((t) => `<span>#${t}${" "}</span>`).join("")}
                    </p>
                </div>
                <!-- ------------icons----------------- -->
                <div class="project-icon">
                <a href=${project.github} target="_blank">
                    <span class="icon">
                        <img src="./images/projects/github.png" alt="github">
                        </span>
                        </a>
                        <a href=${project.live} target="_blank">
                    <span class="icon">
                        <img src="./images/projects/play-button.png" alt="link">
                        </span>
                        </a>
                </div>
            </div>
  `,
  )
  .join("");

const contacts = [
  {
    id: 1,
    title: "Linkedin",
    image: "images/linkedin.png",
    link: "https://www.linkedin.com/in/shelli-pal-1b20202aa/",
  },
  {
    id: 2,
    title: "Github",
    image: "images/github.png",
    link: "https://github.com/shellipal",
  },

  {
    id: 4,
    title: "Leetcode",
    image: "images/leetcode.png",
    link: "https://leetcode.com/u/Shelli_pal/",
  },
];

socialsList.innerHTML = contacts
  .map(
    (contact, i) =>
      `
    <a href="${contact.link}" target="_blank" rel="noopener noreferrer">
    <div class="social-list">
      <div class="social-list-div">
          <img src=${contact.image} alt="">
      </div>
      <h3>${contact.title}</h3>
  </div>
  </a>
  `,
  )
  .join("");
