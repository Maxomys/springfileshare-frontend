import api from './api'

const FILE_UPLOAD_URL = '/file/upload';

const upload = function(file, onUploadProgress) {
  
  let formData = new FormData();

  formData.append('file', file);

  return api.post(FILE_UPLOAD_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress
  });
}

const download = function(fileId) {
  api.get(`/file/${fileId}/download`, {
    responseType: 'blob'
  })
  .then(response => {
    if (!response.headers.filename) {
      return Promise.reject();
    }
    
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', response.headers.filename);
    document.body.appendChild(link);
    link.click();
  })
}

const FileService = {
  upload,
  download
}

export default FileService;
