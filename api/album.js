import http from '../lib/http';

const getAlbums = () => {
  return http.request({
    url: '/auth/album/brief',
    method: 'get'
  });
}

export default {
  getAlbums
}