
const base_url = `https://swapi.dev/api/`;

//fetch all resources
export const getResources= async ()=> {
    const res = await fetch(base_url);
    const data = res.json();    
    return data;
}