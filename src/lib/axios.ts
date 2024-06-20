import axios from 'axios'

import { env } from '@/env'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true, // permite que os cookies do front-end sejam automaticamente enviados pro back-end
})

if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    // intercepta cada requisição e retorna os dados da minha requisição (corpo, cabeçalho), já que o interceptions permite que a gente customize os dados da requisição
    await new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random() * 3000)),
    )

    return config
  })
}
