export interface User{
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'user'
}

export interface LoginData{
    email: string;
    password: string;
}

export interface Auth{
    accessToken: string;
    user: User
}

export interface Category{
    id: string;
    name: string;
    description: string;
}

export interface Product{
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    categoryId: string;
    images: string[];
}
