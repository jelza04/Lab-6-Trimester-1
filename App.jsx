import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import LoadingPage from './components/Loader';
import ErrorPage from './components/ErrorMessage';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://mocki.io/v1/23d504f4-07fd-495b-8158-477a99d4449f')
      .then((res) => {
        // Add delay so loader is visible
        setTimeout(() => {
          setProducts(res.data);
          setLoading(false);
        }, 1500);
      })
      .catch(() => {
        setError('Failed to fetch data from server');
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingPage />;
  if (error) return <ErrorPage message={error} />;

  return (
    <div className="bg-emerald-950 min-h-screen">
      <Navbar />
      <h1 className="text-center text-3xl font-bold mb-4 text-white p-8">
        Welcome to Dori Hastkala
      </h1>
      <div className="container mx-auto p-6">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
