import { useNavigate } from "react-router"
import { get, post } from "../services/api"
import React, { useState } from "react"


export const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>){
    setEmail(event.target.value)
  }

  function handlePassword(event:React.ChangeEvent<HTMLInputElement>){
    setPassword(event.target.value)
  }

  async function handleSubmit(event:React.SubmitEvent<HTMLFormElement>){
    event.preventDefault()

    const authenticated = true
    try{

      if (!authenticated)

      await post("/auth/login", {email, password})

      console.log('inició sesión');

      

    } catch {
      console.log('datos inválidos');
      
    }
  }
  

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 p-8 space-y-6">
        
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-slate-900">
            Sign in
          </h1>

          <p className="text-sm text-slate-500">
            Access your product management dashboard
          </p>
        </div>

        <div className="space-y-4">
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
              placeholder="you@example.com"
              onChange={handleEmail}
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
              placeholder="••••••••"
              onChange={handlePassword}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-800
          cursor-pointer"
        >
          Sign in
        </button>

        <p className="text-center text-xs text-slate-400">
          Product Management System
        </p>
      </form>
    </div>
  )
}