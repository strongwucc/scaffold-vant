import axios from 'axios'
import { baseUrl } from '@/config/env'
axios.defaults.withCredentials = true
// axios.defaults.headers.common["Authorization"] = "";

axios.interceptors.request.use(
  function(config) {
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    return Promise.reject(error)
  }
)

export default class http {
  constructor() {
    var base_api = baseUrl
    this.baseApi = base_api
  }

  get(url, data, isNeedBaseUrl) {
    var options = {
      url: !isNeedBaseUrl ? this.baseApi + url : url,
      data: data || {},
      method: 'get'
    }
    this.request(options)
  }

  post(data, query) {
    var options = {
      url: query ? this.baseApi + query : this.baseApi,
      data: data || {},
      method: 'post'
    }
    return this.request(options)
  }

  all(array) {
    var promiseAll = Promise.all(array)
    return promiseAll
  }

  request(options) {
    var promise = new Promise((resolve, reject) => {
      axios(options)
        .then(result => {
          resolve(result.data)
        })
        .catch(error => {
          reject(error)
        })
    })
    return promise
  }
}
