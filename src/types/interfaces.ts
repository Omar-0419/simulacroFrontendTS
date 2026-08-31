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

export interface RegisterData{
    name: string;
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
    description?: string;
}

export type CreateCategory = Omit<Category, 'id'>

export interface CategoryFormProps{
    onClose: () => void;
    category?: Category;
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

export interface CreateProduct{
    // id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    // category: Category;
    categoryId: string;
    images: string[];
}

export interface ProductResponse{
    data: Product[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface ProductFormProps{
    onClose: () => void;
    product?: Product;
}
