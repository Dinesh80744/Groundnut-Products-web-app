import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Matcha Chocolate',
    price: 18,
    image: 'https://via.placeholder.com/300x400?text=Matcha+Chocolate',
  },
  {
    id: 2,
    name: 'Ceremony Kit',
    price: 79,
    image: 'https://via.placeholder.com/300x400?text=Ceremony+Kit',
  },
  {
    id: 3,
    name: 'Matcha Powder',
    price: 39,
    image: 'https://via.placeholder.com/300x400?text=Matcha+Powder',
    bestSeller: true,
  },
];

const ProductCard = ({ product }) => (
  <div className="border rounded-xl shadow-md p-4 bg-white w-full sm:w-[300px]">
    {product.bestSeller && (
      <span className="text-xs bg-green-600 text-white px-2 py-1 rounded absolute">Best Seller</span>
    )}
    <img src={product.image} alt={product.name} className="rounded mb-2 w-full h-64 object-cover" />
    <h2 className="text-lg font-semibold">{product.name}</h2>
    <p className="text-gray-700">${product.price.toFixed(2)}</p>
  </div>
);

const ProductPage = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handlePriceChange = (event, index) => {
    const newRange = [...priceRange];
    newRange[index] = Number(event.target.value);
    setPriceRange(newRange);
  };

  const filteredProducts = products.filter(
    (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  return (
    <div className="flex p-6 gap-6">
      <div className="w-1/4">
        <h2 className="text-xl font-semibold mb-4">Filter by</h2>
        <div>
          <label className="block mb-2">Min Price: ${priceRange[0]}</label>
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="w-full mb-4"
          />
          <label className="block mb-2">Max Price: ${priceRange[1]}</label>
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className="w-full"
          />
        </div>
      </div>

      <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
