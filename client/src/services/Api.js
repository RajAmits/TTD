import axios from 'axios' // it's a library(likewhich is used for http request.

// this Api is used for different end point.
export default () => {
  return axios.create({
    baseURL: 'http://localhost:8100/'
  })
}
