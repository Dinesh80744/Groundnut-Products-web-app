// src/components/ProductList.tsx
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import db from "../Firebase";

interface Producttype {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  tags: string[];
  rating: number;
  description: string;
}
const ProductListfb = () => {
  const [products, setProducts] = useState<Producttype[]>([]);

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productList: Producttype[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Producttype[];
      setProducts(productList);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductListfb;
