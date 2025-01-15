// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Nav from './components/layout/nav/Nav';
import ProductList from './components/products/ProductList';
import { CartProvider } from './context/CartContext';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Test from './pages/Test';
import UserRoute from './pages/UserRoute';
// import { AuthContext } from './context/AuthContext';

const App = () => {
  return (
  //   <CartProvider>
  //   <div>
  //     <h1>Product Page</h1>
  //     <ProductList />
  //     <Cart/>
  //   </div>
  // </CartProvider>
  <>
    {/* <ProductList></ProductList> */}
      <Nav />
      <UserRoute />
    </>
  );
};

export default App;
