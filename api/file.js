import http from '../lib/http';

const upload = (file) => {
  const data = new FormData();
  data.append('file', file);
  return http.request({
    url: '/auth/upload',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

export default {
  upload
}