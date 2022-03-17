import React, { FC } from 'react';
// import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import WilderPage from "./pages/WilderPage/WilderPage";

import './App.css';

const App: FC = () => (
    <div className="App">
      <Header />
      <WilderPage/>
    </div>
  );

export default App;
