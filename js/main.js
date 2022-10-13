import { getData } from "./movieData.js"

let apiData = "https://netflix-cs-api.netlify.app/"

let movieData = await getData(apiData);

console.log(movieData[0]);

for (let i = 0; i < movieData.length; i++){

    const movieList = document.querySelector(".movieList")
    
    let movieFromGetData = `
        <li id="${movieData[i].id}">
            <div class="movie">
                <img src="${movieData[i].image}">
            </div>
        </li>
        `;
    
    movieList.append(movieFromGetData);
}

