import axios from "axios"

import { tokenStorage } from "../lib/tokenStorage"


const URL = 'http://localhost:3000'


const api = axios.create({
    baseURL: URL,
})

api.interceptors.request.use((config) => {
    const token = tokenStorage.get()

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config

})


export async function get<TResponse>(endpoint: string){
    const response = await api.get<TResponse>(endpoint)
    return response.data
}


export async function post<TResponse, TData>(endpoint: string, data: TData){
    const response = await api.post<TResponse>(endpoint, data)
    return response.data
}

export async function patch<TResponse, TData>(endpoint: string, data: TData){
    const response = await api.patch<TResponse>(endpoint, data)
    return response.data
}

export async function del<TResponse>(endpoint: string) {
    const response = await api.delete<TResponse>(endpoint)
    return response.data //lo veo innecesario
}

