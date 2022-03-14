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

const postNewLink = function(link) {
  api.post('/link', link);
}

const DataService = {
  getAllFiles,
  registerNewUser,
  postNewLink
}

export default DataService;
