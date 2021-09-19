import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3001/",
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
      'Access-Control-Allow-Headers': 'Content-Type, Accept',
      'Content-Type': 'application/json'
    },
  });