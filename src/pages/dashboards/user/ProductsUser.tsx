import { useEffect, useState } from "react"
import { get } from "../../../services/api"

import type { ProductResponse, Product } from "../../../types/interfaces"

export const ProductsUser = () => {
  function getProducts() {
    return get<ProductResponse>('/products')
  }

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response.data)
    })
  }, [])

  console.log(products);
  


  return (
    <div className="min-h-[calc(100vh-72px)] bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Product Management
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Products
          </h1>

          <p className="mt-3 max-w-2xl text-slate-500">
            Browse and manage all the products available in the system.
          </p>
        </div>

        {/* Products */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg cursor-pointer"
            >
              {/* Imagen */}
              <div className="flex h-48 items-center justify-center bg-slate-100">
                {product.images ? (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                ) : (
                  <span className="text-5xl">
                    📦
                  </span>
                )}
              </div>

              {/* Información */}
              <div className="p-6">

                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-bold text-slate-900">
                    {product.name}
                  </h2>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                    ${product.price}
                  </span>
                </div>

                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-500">
                  {product.description}
                </p>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                  {/* Ver detalles */}
                  <button
                    className="cursor-pointer text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                  >
                    View details →
                  </button>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

