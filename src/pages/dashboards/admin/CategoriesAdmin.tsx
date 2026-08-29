import { get } from "../../../services/api"

import { CategoryForm } from "../../../components/CategoryForm"

import { useState, useEffect } from "react"
import { Link } from "react-router"

import type { Category } from "../../../types/interfaces"


export const CategoriesAdmin = () => {
  function getCategories() {
    return get<Category[]>('/categories')
  }

  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data)
    })
  }, [])


  return (
    <div className="min-h-[calc(100vh-72px)] bg-slate-50 px-6 py-12">
  <div className="mx-auto max-w-6xl">

    {/* Encabezado */}
    <div className="mb-10 flex items-start justify-between gap-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Product Management
        </p>

        <h1 className="mt-2 text-4xl font-bold text-slate-900">
          Categories
        </h1>

        <p className="mt-3 max-w-2xl text-slate-500">
          Browse all available categories and explore the products associated
          with each one.
        </p>
      </div>

      {/* Botón */}
      <button
        className="
          mt-5
          rounded-lg
          bg-blue-700
          px-5
          py-3
          font-semibold
          text-white
          shadow-sm
          transition
          hover:bg-blue-600
          hover:shadow-md
          cursor-pointer
        "
      >
        Create category
      </button>
    </div>

    {/* Categorías */}
    {categories.length === 0 ? (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
        <div className="text-4xl">🗂️</div>

        <h2 className="mt-4 text-xl font-semibold text-slate-800">
          No categories found
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          There are currently no categories available.
        </p>
      </div>
    ) : (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            to={`/categories/${category.id}`}
            key={category.id}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
          >
            <h3 className="mt-6 text-xl font-bold text-slate-900">
              {category.name}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              {category.description ||
                "Explore products in this category."}
            </p>

            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
              <span className="text-sm font-medium text-blue-600">
                View category →
              </span>

              <div>
                <button className="m-1 w-15 cursor-pointer rounded-lg border border-red-400 text-red-400 hover:bg-red-400 hover:text-amber-50">
                  Delete
                </button>

                <button className="m-1 w-15 cursor-pointer rounded-lg border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-amber-50">
                  Edit
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    )}
  </div>
  <CategoryForm/>
</div>

  )
}
