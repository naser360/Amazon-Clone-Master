import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-clone-b0f72.cloudfunctions.net/api'
    
});

export default instance;

//https://clone-b0f72.web.app