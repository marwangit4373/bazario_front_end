import React from 'react';
import { Routes, Route } from 'react-router-dom'; // استيراد Routes و Route
import Login from './Login';

const Test = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Test;
