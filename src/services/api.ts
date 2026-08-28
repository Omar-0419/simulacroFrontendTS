import axios from "axios"
const API = 'http://localhost:3000'


export async function get<TResponse>(endpoint: string){
    const response = await axios.get<TResponse>(`${API}${endpoint}`)

    return response.data
}

export async function post<TResponse, TData>(endpoint: string, data: TData){
    const response = await axios.post<TResponse>(`${API}${endpoint}`, data)

    return response.data
}
