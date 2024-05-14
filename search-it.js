const index = document.querySelector(".index");

window.addEventListener("load", async () =>{
    const response = await getDataFromAPI('https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=iphone&country=US&category=aps');
    console.log(response);
    const artistName = response.artists; 
    getTrendingArtists(artistName);
});

async function getDataFromAPI(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}

function getTrendingArtists(artistName) {
  
    console.log("Trending artists:", artistName);
    index.textContent = artistName.join(", ");
}

// function showTrendingArtists
