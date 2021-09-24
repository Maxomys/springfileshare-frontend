import axios from "axios";
import api from "./api"

const getAllFiles = async function() {
  let fileArray = [];
  
  await api.get('/file/all')
    .then(response => {
      fileArray = response.data;
    }).catch(error => {
      console.log(error);
    });

  return fileArray;
}

const registerNewUser = function(user) {
  api.post('/register', user);
}

const DataService = {
  getAllFiles,
  registerNewUser
}

export default DataService;
