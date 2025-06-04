import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import db from '../Firebase'; // Adjust path as needed
import Productcard from './Productcard';
const Productlist = () => {
  
    const products = [
  {
    id: 'A1',
    name: 'Peanut Butter',
    category: 'Processed',
    price: 500,
    image: "https://cdn.thewirecutter.com/wp-content/media/2023/03/peanutbutter-2048px-00085.jpg",
    tags: ['Popular'],
    rating: 4.5,
    description: '100% Pure peanut butter made with fine nuts',
  },
  {
    id: 'A2',
    name: 'Sample Product',
    category: 'Natural',
    price: 100,
    image: "https://pureagri.co.in/wp-content/uploads/2024/04/singdana1.jpg",
    tags: ['Healthy'],
    rating: 4.0,
    description: 'Great product for testing',
  }
];
interface products {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  tags: string[];
  rating: number;
  description: string;
}

const [filteredList, setFilteredList] = useState<products[]>([]);


const [minPrice, setMinPrice] = useState('');
const [maxPrice, setMaxPrice] = useState('');

const handleFilter = () => {
  const min = parseFloat(minPrice) || 0;
  const max = parseFloat(maxPrice) || Infinity;
  const filteredList = products.filter(
    (product) => product.price >= min && product.price <= max
  );
  setFilteredList(filteredList);
};
return (
    <div>
      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        placeholder="Min Price"
      />
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        placeholder="Max Price"
      />
      <button onClick={handleFilter}>Filter</button>

      <ul>
        {filteredList.map(product => (
          <li key={product.id}>{product.name} - ₹{product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Productlist;