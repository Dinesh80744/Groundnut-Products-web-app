import React, { useState } from 'react';
import db from '../Firebase';

import { addDoc ,collection } from 'firebase/firestore';

function Adminupload() {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    image: '',
    tags: [],
    rating: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === 'tags' ? value.split(',') : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitted Product:', product);
    try {
      await addDoc(collection(db, 'products'), {
        ...product,
        price: Number(product.price),
        rating: Number(product.rating)
      });
      alert('Product uploaded successfully!');
      alert('Product uploaded successfully!');
      // Reset the form
      setProduct({
        id: '',
        name: '',
        category: '',
        price: '',
        image: '',
        tags: [],
        rating: '',
        description: '',
      });
    } catch (error) {
      console.error('Error uploading product:', error);
      alert('Failed to upload product.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-bold mb-4">Product Form</h2>

      <label className="block">
        Name:
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
          required
        />
      </label>

      <label className="block">
        Product ID:
        <input
          type="text"
          name="id"
          value={product.id}
          onChange={handleChange}
          className="productid"
          required
        />
      </label>

      <label className="block">
        Category:
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
        />
      </label>

      <label className="block">
        Price:
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
        />
      </label>

      <label className="block">
        Image URL:
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
        />
      </label>

      <label className="block">
        Tags (comma separated):
        <input
          type="text"
          name="tags"
          value={product.tags.join(',')}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
        />
      </label>

      <label className="block">
        Rating:
        <input
          type="number"
          step="0.1"
          name="rating"
          value={product.rating}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
        />
      </label>

      <label className="block">
        Description:
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
        />
      </label>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

export default Adminupload;
