import axios from 'axios'
import { tokenKey } from '@components/Auth/constants'

const fetcher = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: sessionStorage.getItem(tokenKey)
  }
})

export default fetcher
