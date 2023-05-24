function randomAnime() {
  const genreSelect = document.getElementById('genre-select');
  const genreValue = genreSelect.value;
  const find = document.getElementById('animelabel')
  const animeimage = document.getElementById('imagelabel')

  fetch(`https://api.jikan.moe/v4/anime?genre=${genreValue}`)
    .then(response => response.json())
    .then(data => {
      const randomIndex = Math.floor(Math.random() * data.data.length);
      const anime = data.data[randomIndex];
      find.innerHTML = `Titre : ${anime.title} <br> Url : <a href=${anime.url}>URL</a> <br> Synopsis : ${anime.synopsis}`
      animeimage.setAttribute('src', anime.images.large);
    })
    .catch(error => {
      console.error(error);
    });
}