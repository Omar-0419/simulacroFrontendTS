import { useState, type FormEvent } from "react"

export const CategoryForm = () => {


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4">
            <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl">

                {/* Header */}
                <div className="mb-6 flex items-start justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                            Product Management
                        </p>

                        <h2 className="mt-2 text-2xl font-bold text-slate-900">
                            Create category
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            Add a new category to organize your products.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="text-2xl font-semibold text-slate-400 transition hover:text-slate-700 cursor-pointer"
                    >
                        ×
                    </button>
                </div>

                {/* Formulario */}
                <form className="space-y-5">

                    {/* Nombre */}
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-semibold text-slate-700"
                        >
                            Category name
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="e.g. Electronics"
                            required
                            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    {/* Descripción */}
                    <div>
                        <label
                            htmlFor="description"
                            className="mb-2 block text-sm font-semibold text-slate-700"
                        >
                            Description
                        </label>

                        <textarea
                            id="description"
                            name="description"
                            rows={4}
                            placeholder="Describe this category..."
                            required
                            className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    {/* Botones */}
                    <div className="flex justify-end gap-3 border-t border-slate-100 pt-5">
                        <button
                            type="button"
                            className="rounded-lg border border-slate-300 px-5 py-2.5 font-medium text-slate-600 transition hover:bg-slate-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
                        >
                            Create category
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}
