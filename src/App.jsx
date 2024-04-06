import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MultiStepForm from './components/MultiStepForm';
import LoadingScreen from './components/LoadingScreen';
import ProductPage from './components/ProductPage';

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Enclose MultiStepForm within a Route component */}
        <Route path="/" exact element={<MultiStepForm setLoading={setLoading} />} />
        <Route path="/loading" exact element={<LoadingScreen setLoading={setLoading} />} />
        <Route path="/product" exact element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
