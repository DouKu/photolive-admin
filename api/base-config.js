import http from '../lib/http';

const putBaseConfig = ({ data, params }) => {
  return http.request({
    url: `/auth/album/cfg/base/${params.albumId}`,
    method: 'put',
    data
  });
}

const getBaseConfig = ({ params }) => {
  return http.request({
    url: `/auth/album/cfg/base/${params.albumId}`,
    method: 'get'
  });
}

export default {
  getBaseConfig,
  putBaseConfig
}