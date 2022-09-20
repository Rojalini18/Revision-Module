let movie;
async function getData() {
  let query = document.querySelector("#search").value;

  if (query.length <= 2) {
    return false;
  }
  let ans = await fetch(`http://www.omdbapi.com/?apikey=20b8a83d&s=${query}`);

  let data = await ans.json();
  let movie_arr = data.Search;

  show_data(movie_arr);
}

function show_data(arr) {
  document.querySelector("#movie_container").innerHTML = null;
  if (arr === undefined) {
    return false;
  }
  arr.map(function (ele) {
    let main_container = document.createElement("div");
    main_container.setAttribute("class", "search_content");

    let poster = document.createElement("div");
    let image = document.createElement("img");

    image.src = ele.Poster;
    let description = document.createElement("div");

    let years = document.createElement("para");
    years.innerHTML = ele.Year;

    let para = document.createElement("para");
    let moviename = ele.Title;

    para.innerHTML = `<b>${ele.Title}</b>`;
    poster.append(image);
    description.append(para, years);

    main_container.append(poster, description);

    main_container.addEventListener("click", function () {
      display(moviename);
    });
    document.querySelector("#movie_container").append(main_container);
  });
}

function debouncer(hello) {
  if (movie) {
    clearTimeout(movie);
  }
  movie = setTimeout(function () {
    hello();
  }, 1000);
}
