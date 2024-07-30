import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VerificationScreen from './components/VerificationScreen';
import ConfirmationScreen from './components/ConfirmationScreen';
import SuccessMessage from './components/SuccessMessage';
import InputOTPPage from './components/InputOTPPage';
import Screen from './components/Screen';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
          <Route path="/" element={<VerificationScreen />} />
          <Route path="/SuccessMessage" element={<SuccessMessage />} />
          <Route path="/InputOTPPage" element={<InputOTPPage />} />
          <Route path="/Screen" element={<Screen />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
