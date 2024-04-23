import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookingConfirmation = () => {
  const [localStorageData, setLocalStorageData] = useState(null);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('formData');

    setLocalStorageData(storedData ? JSON.parse(storedData) : null);
  }, []);
  const handleBackButtonClick = () => {
    // Remove the data from local storage
    localStorage.removeItem('formData');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('phone');
    localStorage.removeItem('date');
    localStorage.removeItem('time');
    localStorage.removeItem('guests');
    localStorage.removeItem('occasion');
    localStorage.removeItem('description');
    setSubmit(false);
  };

  return (
    <section className="confirmation-container">
      <div className="booking-form">
        <div className="container">
          <h2 className="text-center">Confirm the data</h2>
          {localStorageData && (
            <>
              <div>
                <strong>Name:</strong> {localStorageData.name}
              </div>
              <div>
                <strong>Email:</strong> {localStorageData.email}
              </div>
              <div>
                <strong>Phone:</strong> {localStorageData.phone}
              </div>
              <div>
                <strong>Date:</strong> {localStorageData.date}
              </div>
              <div>
                <strong>Time:</strong> {localStorageData.time}
              </div>
              <div>
                <strong>Guests:</strong> {localStorageData.guests}
              </div>
              <div>
                <strong>Occasion:</strong> {localStorageData.occasion}
              </div>
              <div>
                <strong>Additional information:</strong>{' '}
                {localStorageData.description}
              </div>
            </>
          )}
          <div className="text-center">
            <Link
              to="/reservations"
              className="btn-edit"
              onClick={handleBackButtonClick}
            >
              Edit
            </Link>
            <button
              type="button"
              onClick={() => setSubmit(true)}
              className="btn-book"
            >
              Book Now
            </button>
          </div>
          {submit && (
            <p className="text-center">
              <strong>Great! Reservation completed successfully.</strong>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingConfirmation;
