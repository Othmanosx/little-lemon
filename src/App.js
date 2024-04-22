import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Layout from './views/Layout';
import BookingForm from './views/BookingForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="reservations" element={<BookingForm />} />
      </Route>
    </Routes>
  );
}

export default App;
