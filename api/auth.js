import http from '../lib/http';

const signUp = ({ data }) => {
  return http.request({
    url: 'v1/register',
    method: 'post',
    data
  })
}

const signIn = ({ data }) => {
  return http.request({
    url: 'v1/login/account',
    method: 'post',
    data
  })
}

export default {
  signUp,
  signIn
}