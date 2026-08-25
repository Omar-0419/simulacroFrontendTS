import axios from "axios";

const API = 'http://localhost:3000/categories'


export async function getUser() {
    const response = await axios.get(API)
    console.log(response);
    
}