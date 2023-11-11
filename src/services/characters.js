
const base_url = `https://swapi.dev/api/`;

export const getCharacters = async ()=> {
    const res = await fetch(base_url);
    const data = res.json();
    const {results} = data;
    console.log(results);
    return results;
}