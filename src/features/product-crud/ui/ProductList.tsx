import React, { useEffect } from 'react'
import ProductCard from '../ui/ProductCard'
import { useProductStore } from '../../../app/store/product.state'

const ProductList: React.FC = () => {
  const { products, isLoading, fetchProducts } = useProductStore()

  useEffect(() => {
    // Parametrlar hozircha qo‘llab-quvvatlanmasa, oddiy chaqiramiz
    fetchProducts()
  }, [fetchProducts])

  if (isLoading)
    return <div className="text-center py-10 text-gray-500">Loading products...</div>

  if (products.length === 0)
    return <div className="text-center py-10 text-gray-400">No products found.</div>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
          name={p.name}
          price={p.price}
          description={p.description}
          image={p.image}
        />
      ))}
    </div>
  )
}

export default ProductList
