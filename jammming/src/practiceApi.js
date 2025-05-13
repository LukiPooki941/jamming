const apiKey = '5512ce31c5264f6eaa0f445c2c9fd0c1'
const baseURL = ' https://api.spotify.com.'
const genreRequestEndpoint = 'https://api.spotify.com/v1/tracks/{11dFghVXANMlKmJXsNCbNl}'

const getSongs = async() => {
    const apiKey = '5512ce31c5264f6eaa0f445c2c9fd0c1'
    const baseURL = ' https://api.spotify.com.'
    const genreRequestEndpoint = 'https://api.spotify.com/v1/tracks/{11dFghVXANMlKmJXsNCbNl}'
    const requestParams = `?api_key=${apiKey}`
    const realURL = baseURL + genreRequestEndpoint + requestParams;
  try{ const response = await fetch(realUrl);
   if(response.ok){
    const jsonResponse = await response.json();
    return jsonResponse;
    }} catch(err){
        alert(err)}
    };



export default practiceApi.js;