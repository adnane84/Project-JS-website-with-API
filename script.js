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
      console.log(item)
      const name = item.name;
      const thumbnail_url = item.thumbnail_url;
      const description = item.description;
      const instructions = item.instructions;
      const recipe = `<li class="recipe-info">
      <img src="${thumbnail_url}"> 
      <div class="recipe-info">
      <h2 class="recipe-name">${name}</h2>
      </div>
      <div  class="description">
      <p>"${description}"</p>
      </div>
      </li>
      `
      document.querySelector('.recipes').innerHTML += recipe
    })
    
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

