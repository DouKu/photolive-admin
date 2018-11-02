import http from '../lib/http';

const getBannerConfig = ({ params }) => {
  return http.request({
    url: `/auth/album/cfg/banner/${params.albumId}`,
    method: 'get'
  });
}

export default {
  getBannerConfig
}