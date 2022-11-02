import axios from "axios";
import { useState } from 'react';



const base = 'https://youtube-v31.p.rapidapi.com';


const options = {
  params: {
    maxResults: '100'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

let countOFApiCall = 1;
export const fetchfromApi = async (url) => {
  
  const data = axios.get(`${base}/${url}`, options);

  // to count tha api call 
  console.log('api call: ' + countOFApiCall);
  countOFApiCall++;

  return data;
}
// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
