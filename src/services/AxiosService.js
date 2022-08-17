import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL: 'https://bcw-getter.herokuapp.com',
  timeout: 8000
})

export const nasaApi = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
  timeout: 4000,
  params: {
    api_key: 'hlOAuEklnXtb7pxnDgQ9npe1RkU1XdsgULiChh45'
  }
})