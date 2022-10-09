export async function getData(url){
    const response = await fetch(url);
    let data = await response.json();
    return data;
}