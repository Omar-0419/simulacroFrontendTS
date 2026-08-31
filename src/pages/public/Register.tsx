import { Link, useNavigate } from "react-router"
import { useState } from "react"
import { post } from "../../services/api"
import { useAuth } from "../../context/AuthContext"
import type { Auth, RegisterData } from "../../types/interfaces"

export const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { register } = useAuth()
    const navigate = useNavigate()

    function handleName(event: React.ChangeEvent<HTMLInputElement>){
        setName(event.target.value)
    }

    function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value)
    }

    function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value)
    }

    async function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
        event.preventDefault()

        try {
            const response = await post<Auth, RegisterData>('/auth/register', { name, email, password })
            register(response.accessToken, response.user)

            alert('You have successfully registered')
            navigate('/home')
        } catch (error) {
            console.log(error);
            alert('Email already exists')
            
        }
        
    }

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 p-8 space-y-6">

                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold text-slate-900">
                        Create account
                    </h1>

                    <p className="text-sm text-slate-500">
                        Create your account to start managing your products
                    </p>
                </div>

                <div className="space-y-4">

                    <div className="space-y-2">
                        <label
                            htmlFor="name"
                            className="text-sm font-medium text-slate-700"
                        >
                            Full name
                        </label>

                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            required
                            onChange={handleName}
                            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-slate-700"
                        >
                            Email address
                        </label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            onChange={handleEmail}
                            placeholder="you@example.com"
                            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="password"
                            className="text-sm font-medium text-slate-700"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            name="password"
                            required
                            onChange={handlePassword}
                            placeholder="••••••••"
                            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                </div>

                <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-800 cursor-pointer"
                >
                    Create account
                </button>

                <p className="text-center text-sm text-slate-500">
                    Already have an account?{" "}
                    <Link
                        to="/"
                        className="font-medium text-blue-600 hover:text-blue-700 hover:underline"
                    >
                        Sign in
                    </Link>
                </p>

                <p className="text-center text-xs text-slate-400">
                    Product Management System
                </p>

            </form>
        </div>

    )
}
