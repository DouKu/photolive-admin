import http from '../lib/http';

const getTagConfig = ({ params }) => {
  return http.request({
    url: `/auth/album/cfg/tag/${params.albumId}`,
    method: 'get'
  });
}

const postTagConfig = ({ params, data }) => {
  return http.request({
    url: `/auth/album/cfg/tag/add/${params.albumId}`,
    method: 'put',
    data
  });
}

export default {
  getTagConfig,
  postTagConfig
}