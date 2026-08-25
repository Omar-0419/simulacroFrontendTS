export interface IUSer{
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'user'
}

export interface ICategory{
    name: string;
    description: string;
}

export interface IProduct{
    name: string;
    description: string;
    price: number;
    stock: number;
    categoryId: string;
    images: [string]
}