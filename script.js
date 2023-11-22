console.log("File Linked")


const API_URL_GIPHY = "https://api.giphy.com/v1/gifs/random";

const getRandomGIF = (keyword) => {
  return fetch(`${API_URL_GIPHY}?tag=${keyword}&api_key=${API_KEY_GIPHY}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { url } = data.data;
      const card = document.getElementById("random-gif");
      card.innerHTML = `<img src="${url}" alt="Random GIF">`;
    })
    .catch((error) => {
      console.error(error);
    });
};

getRandomGIF("funny");

