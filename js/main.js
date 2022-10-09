import { getData } from "./movieData.js"

let apiData = "https://netflix-cs-api.netlify.app/"

let movieData = getData(apiData);

console.log(movieData);