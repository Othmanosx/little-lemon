import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Layout from './views/Layout';
import BookingForm from './views/BookingForm';
import BookingConfirmation from './views/BookingForm/BookingConfirmation';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="reservations" element={<BookingForm />} />
        <Route path="booking-confirmation" element={<BookingConfirmation />} />
      </Route>
    </Routes>
  );
}

export default App;
