import http from '../lib/http';

const saveBaseConfig = ({ data, params }) => {
  return http.request({
    url: `/auth/album/cfg/base/${params.albumId}`,
    method: 'put',
    data
  });
}

export default {
  saveBaseConfig
}