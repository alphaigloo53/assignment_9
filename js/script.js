console.log("script.js loaded");

document.addEventListener("DOMContentLoaded", function() {
    let gifContainer = document.querySelector("#gif-container");
    let fetchButton = document.querySelector("#fetch-gif-btn");
    let searchInput = document.querySelector("#search-input");
    fetchButton.addEventListener("click", async function() {
    let searchTerm = searchInput.value;
    let apiKey = "bshIrxLh89k9clmXI0EDF6pPKofoyKmq";
    let endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=10`;
    let response = await fetch(endpoint);
    let data = await response.json();
    console.log(data);
    let gifList = data.data;
    let images = [];
    gifList.forEach(function(gif) {
      let imageURL = gif.images.original.url;
      images.push(imageURL);
    });
    console.log(images);
    gifContainer.innerHTML = "";
    images.forEach(function(imageURL) {
      gifContainer.innerHTML += `<img src=${imageURL} class="col-3 mb-3">`;
    });
  });
});
 