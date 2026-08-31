import React, { useState } from "react"

import type {
    Product,
    CreateProduct,
    ProductFormProps
} from "../../types/interfaces"

import { post } from "../../services/api"

export const ProductFormCreate = ({
    onClose,
    product
}: ProductFormProps) => {

    const [name, setName] = useState(product?.name || "")
    const [description, setDescription] = useState(
        product?.description || ""
    )
    const [price, setPrice] = useState(product?.price || 0)
    const [stock, setStock] = useState(product?.stock || 0)
    const [categoryId, setCategoryId] = useState(
        product?.categoryId || ""
    )
    const [images, setImages] = useState<string[]>(
        product?.images || []
    )

    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault()

        try {
            await post<Product, CreateProduct>(
                "/products",
                {
                    name,
                    description,
                    price,
                    stock,
                    categoryId,
                    images
                }
            )

            alert("The new product has been added!")

            onClose()

            window.location.reload()

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4">

            <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 px-8 py-6">

                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                            Product Management
                        </p>

                        <h2 className="mt-1 text-2xl font-bold text-slate-900">
                            Add new product
                        </h2>

                        <p className="mt-1 text-sm text-slate-500">
                            Complete the information to add a product to your inventory.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-100 text-xl font-medium text-slate-500 transition hover:bg-red-50 hover:text-red-500"
                    >
                        ×
                    </button>

                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>

                    <div className="space-y-6 px-8 py-6">

                        {/* Basic information */}
                        <div>

                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                                    📦
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-800">
                                        Product information
                                    </h3>

                                    <p className="text-xs text-slate-400">
                                        Basic information about your product
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">

                                {/* Name */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-medium text-slate-700"
                                    >
                                        Product name
                                    </label>

                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Gaming keyboard"
                                        required
                                        value={name}
                                        onChange={(event) =>
                                            setName(event.target.value)
                                        }
                                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                                    />
                                </div>

                                {/* Description */}
                                <div>
                                    <label
                                        htmlFor="description"
                                        className="mb-2 block text-sm font-medium text-slate-700"
                                    >
                                        Description
                                    </label>

                                    <textarea
                                        id="description"
                                        rows={3}
                                        placeholder="Describe your product..."
                                        required
                                        value={description}
                                        onChange={(event) =>
                                            setDescription(event.target.value)
                                        }
                                        className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                                    />
                                </div>

                            </div>

                        </div>

                        {/* Price and Stock */}
                        <div className="grid gap-5 md:grid-cols-2">

                            {/* Price */}
                            <div>
                                <label
                                    htmlFor="price"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Price
                                </label>

                                <div className="relative">

                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400">
                                        $
                                    </span>

                                    <input
                                        id="price"
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        required
                                        value={price}
                                        onChange={(event) =>
                                            setPrice(Number(event.target.value))
                                        }
                                        className="w-full rounded-xl border border-slate-200 py-3 pl-8 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                                    />

                                </div>
                            </div>

                            {/* Stock */}
                            <div>
                                <label
                                    htmlFor="stock"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Available stock
                                </label>

                                <input
                                    id="stock"
                                    type="number"
                                    min="0"
                                    required
                                    value={stock}
                                    onChange={(event) =>
                                        setStock(Number(event.target.value))
                                    }
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                                />
                            </div>

                        </div>

                        {/* Category and image */}
                        <div className="grid gap-5 md:grid-cols-2">

                            {/* Category */}
                            <div>
                                <label
                                    htmlFor="category"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Category ID
                                </label>

                                <input
                                    id="category"
                                    type="text"
                                    placeholder="Category ID"
                                    required
                                    value={categoryId}
                                    onChange={(event) =>
                                        setCategoryId(event.target.value)
                                    }
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                                />
                            </div>

                            {/* Image */}
                            <div>
                                <label
                                    htmlFor="image"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Product image
                                </label>

                                <input
                                    id="image"
                                    type="url"
                                    placeholder="https://image.com/product.jpg"
                                    onChange={(event) => {
                                        const value = event.target.value

                                        setImages(value ? [value] : [])
                                    }}
                                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                                />
                            </div>

                        </div>

                        {/* Image preview */}
                        {images.length > 0 && (
                            <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-3">

                                <img
                                    src={images[0]}
                                    alt="Product preview"
                                    className="h-16 w-16 rounded-xl object-cover"
                                />

                                <div>
                                    <p className="text-sm font-semibold text-slate-700">
                                        Image preview
                                    </p>

                                    <p className="mt-1 text-xs text-slate-400">
                                        This image will be displayed on the product card.
                                    </p>
                                </div>

                            </div>
                        )}

                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-end gap-3 border-t border-slate-100 bg-slate-50 px-8 py-5">

                        <button
                            type="button"
                            onClick={onClose}
                            className="cursor-pointer rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="cursor-pointer rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md active:scale-[0.98]"
                        >
                            Add product
                        </button>

                    </div>

                </form>

            </div>

        </div>
    )

}