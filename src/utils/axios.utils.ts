import axios, { AxiosInstance } from 'axios'

const customAxios: AxiosInstance = axios.create({
    baseURL: 'https://pdl.fatanugraha.xyz'
})

export { customAxios }
