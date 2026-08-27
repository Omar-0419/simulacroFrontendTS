import { Link } from 'react-router'

export const Home = () => {
  return (
    <div className="min-h-[calc(100vh-72px)] bg-slate-50">
      {/* Hero */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-slate-900 px-8 py-16 text-white md:px-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Product Management System
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Manage your products in one place.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Organize products, manage categories and keep track of your
              favorite items with a simple and efficient dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                View products
              </Link>

              <Link
                to="/categories"
                className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                Browse categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Everything you need to manage your products
            </h2>

            <p className="mt-3 text-slate-500">
              Access the main features of the platform from one place.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Products */}
            <Link
              to="/products"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl">
                📦
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Products
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                View, create, edit and manage all your products from a single
                place.
              </p>
            </Link>

            {/* Categories */}
            <Link
              to="/categories"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-xl">
                🗂️
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Categories
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                Organize your products into categories and keep your inventory
                structured.
              </p>
            </Link>

            {/* Favorites */}
            <Link
              to="/favorites"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-xl">
                ❤️
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Favorites
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                Save and quickly access the products that are most important to
                you.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}