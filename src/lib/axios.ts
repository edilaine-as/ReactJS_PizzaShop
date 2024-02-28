import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true, // permite que os cookies do front-end sejam automaticamente enviados pro back-end
})
