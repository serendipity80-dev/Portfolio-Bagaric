
// set the date/footer
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** navbar fixed ************
const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});


// PROJECT SECTION
const projects = [
  
    {
        id:1,
        title: "for the love of wine",
        category: "css",
        img: "https://res.cloudinary.com/dbiqsk9jz/image/upload/v1636972250/samples/projects/for-the-love-of-wine_vopc8t.png",
        demo: "https://serendipity80-dev.github.io/For-the-Love-of-Wine/",
        description:"Private project. Winery, small family business."

    },
    {
        id:2,
        title: "Two Way Street",
        category: "MERN",
        img: "https://res.cloudinary.com/dbiqsk9jz/image/upload/v1641242205/samples/projects/Two_Way_Street_fdudfc.png",
        demo: "https://client-b05jnlwng-serendipity80-dev.vercel.app/",
        description:" Our team final project with which we completed a 1-year Bootcamp training at DCI. We used MERN stack technology. I was responsible for the landing page."

    },


    {
        id:3,
        title: "portfolio",
        category: "javascript",
        img: "https://res.cloudinary.com/dbiqsk9jz/image/upload/v1659539565/samples/projects/Bagaric_begwtb.png",
        demo: "https://bagaric.vercel.app/",
        description:"Small private project - Portfolio"

    },
    // {
    //     id:4,
    //     title: "weather app",
    //     category: "react-js",
    //     img: "https://res.cloudinary.com/dbiqsk9jz/image/upload/v1636972281/samples/projects/weather_lpr63p.png",
    //     demo: "https://serendipity80-dev.github.io/Weather-App/"

    // },
  
];

const container = document.querySelector('.projects-center');
const btnContainer = document.querySelector('.btn-container');

window.addEventListener("DOMContentLoaded", function () {
    displayProjectItems(projects);
    displayProjectButtons();
});

const displayProjectItems = (projectItems) => {
    
    let displayProjects = projectItems.map( (item) => {

      return `
      <a href=${item.demo} class= "project">
        <article class="project">
          <img
            src=${item.img}
            alt="single project"
            class="project-img"
          />
          <div class="project-info">
            <h4${item.title}</h4>
            <h4>${item.category}</h4>
            <p>${item.description}</p>
          </div>
        </article>
      </a>`
    });

    container.innerHTML = displayProjects;
};

const displayProjectButtons = () => {

    const categories = projects.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category)
            }
            return values;
        },

        ["all"]
    );

    const categoryBtns = categories.map(function (category) {

        return `
        <button id="filter-btn" class="btn btn-primary" data-id=${category} type="button">${category} </button>
        
        `
    })
    .join("");

    btnContainer.innerHTML = categoryBtns;

    const filterBtns = document.querySelectorAll('#filter-btn');

    filterBtns.forEach( (btn) => {
        btn.addEventListener("click", (e) => {
            const category = e.currentTarget.dataset.id;
            const projectCategory = projects.filter ((projectItem) => {
                if (projectItem.category === category) {
                    return projectItem
                }
            });
            if (category === "all") {
                displayProjectItems(projects)
            } else {
                displayProjectItems(projectCategory);
            }
        });
    });
}


