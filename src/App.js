import React, { useState } from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Tebs', price: 8000, image: 'tebs.jpg' },
  { id: 2, name: 'Chiki Balls', price: 3000, image: 'chiki.jpg' },
  { id: 3, name: 'Coca-cola', price: 5000, image: 'cola.jpg' },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <header>
        <h1>Beli Aja</h1>
      </header>
      <div className="container">
        <div className="product">
          <h2>Products</h2>
          {products.map((product) => (
            <div key={product.id}>
              <img src={`images/${product.image}`} alt={product.name} style={{ maxWidth: '100px' }} />
              <p>{product.name} - Rp{product.price}</p>
              <button onClick={() => addToCart(product)}>Tambah ke Keranjang</button>
            </div>
          ))}
        </div>
        <div className="cart">
          <h2>Shopping Cart</h2>
          {cart.map((product) => (
            <div key={product.id}>
              <p>{product.name} - Rp{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
