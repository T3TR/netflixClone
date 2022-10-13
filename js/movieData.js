export async function getData(url){
    const response = await fetch(url);
    const { data } = await response.json();
    //this.movies = data;
    return data;
}