import React from 'react';

const searchMaster = 
const search_url = `https://api.spotify.com/v1/search?q=${searchMaster}&type=track`;




async function getSongs() {
const searchMaster = 
const search_url = `https://api.spotify.com/v1/search?q=${searchMaster}&type=track`;




    let accessToken = localStorage.getItem('access_token');
  try{
    const response = await fetch(search_url, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });
    if(response.ok){
  
   const data = await response.json();
   return <p>{data}</p>;
}} catch(error){
        alert(error)
    }

  }


  



export default getSongs;