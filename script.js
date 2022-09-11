const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0f8fba13d2mshb0cd96b951b4627p17b4e8jsnfd9e6f98e88d',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};

const sortBy = document.getElementById('sort-by')



fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=30&tags=under_30_minutes', options)
  .then(response => response.json())
  .then(data => {

    const list = data.results;
    list.map((item) => {

      const { name, thumbnail_url, description, instructions, id } = item;



      const recipe = document.createElement('div');
      recipe.classList.add('recipes');
      recipe.innerHTML = `
      <div class="recipe-element">
      <li class="recipe-info">
      <div class="recipe-img">
      <img src="${thumbnail_url}"> 
      </div>
      <div class="recipe-name">
      <br>
      <button class="read-more" id="${id}">Read More</button> 
      <h2 id="${name}">${name}</h2>
      <p> "${description}"</p>
      </div>
      </li>
      </div>
      `
      main.appendChild(recipe);

      document.getElementById(id).addEventListener('click', () => {
        let id = item.id
        openNav();

      })



    })

    const overlayContent = document.getElementById('overlay-content');


    function openNav() {
      document.getElementById("myNav").style.height = "100%";
      fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=30&tags=under_30_minutes', options).then(res => res.json()).then(video => {
        data = video.results;
        data.map(el => {
          videoData = el.original_video_url;
          console.log(videoData);

          let videoLiknk = [];
          videoLiknk.push(videoData);
          console.log(videoLiknk);


        })



      });





      /* Close when someone clicks on the "x" symbol inside the overlay */
      function closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }

















    }

  })






  .catch(err => console.error(err));















// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});

