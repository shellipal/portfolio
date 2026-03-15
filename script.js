// console.log("hello world!!!");

const projects = [
  {
    id: 1,
    title: "Todo App",
    description:
      "Todo app with add, update and delete functionality with great UI",
    tech: ["HTML", "CSS", "JS"],
    image: "./images/projects/bookverse.png",
    github: "https://github.com/shellipal/todo",
    live: "https://github.com/shellipal/todo",
  },
  {
    id: 2,
    title: "Blog App",
    description:
      "Todo app with add, update and delete functionality with great UI",
    image: "./images/projects/recipe.png",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/shellipal/todo",
    live: "https://github.com/shellipal/todo",
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "Todo app with add, update and delete functionality with great UI",
    image: "./images/projects/imggen.png",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/shellipal/todo",
    live: "https://github.com/shellipal/todo",
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
                    <span class="icon">
                        <img src="/images/projects/github.png" alt="github">
                    </span>
                    <span class="icon">
                        <img src="/images/projects/play-button.png" alt="link">
                    </span>
                </div>
            </div>
  `,
  )
  .join("");
