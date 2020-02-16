const creatorsUrl = "https://api.rawg.io/api/games";

fetch(creatorsUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    createGames(json);
  })
  .catch(function(error) {
    console.log(error);
  });

function createGames(json) {
  const results = json.results;
  console.dir(results);

  const resultsContainer = document.querySelector(".row.results");

  let html = "";

  results.forEach(function(result) {
    let imageUrl = ".background_image";

    if (result.image) {
      imageUrl = result.image;
    }

    html += `<div class="game">
    <h2 class="Name of game">${results.image}</h2>
    <img src="" alt="Name of game" />
  </div>`;
  });
  resultsContainer.innerHTML = html;
}
