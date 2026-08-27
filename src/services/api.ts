import axios from "axios"
const API = 'http://localhost:3000'


export async function get<TResponse, TData>(endpoint: string, data: TData){
    const response = await axios.get<TResponse>(`${API}${endpoint}`,{params: data})

    return response.data
}

export async function post<TResponse, TData>(endpoint: string, data: TData){
    const response = await axios.post<TResponse>(`${API}${endpoint}`, data)

    return response.data
}
