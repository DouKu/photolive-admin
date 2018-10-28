import http from '../lib/http';

const saveBaseConfig = ({ data }) => {
  return http.request({
    url: '',
    method: 'put',
    data
  })
}

export default {
  saveBaseConfig
}