import React, { useState } from 'react';
import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Api from '../../utils/api';

const CustomInput = ({ label, required, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>
        {label}
        <span className={required}>{required}</span>
      </label>

      <input
        {...field}
        {...props}
        className={`${meta.touched && meta.error ? 'input-error' : ''}`}
      />
      {meta.touched && meta.error ? (
        <div className="errors">{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomText = ({ label, required, rows, cols, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>
        {label} <span className="required">{required}</span>
      </label>

      <textarea
        {...field}
        {...props}
        className={`${'input notes'} ${
          meta.touched && meta.error ? 'input-error' : ''
        }`}
      />
      {meta.touched && meta.error ? (
        <div className="errors">{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomSelect = ({ label, placeholder, required, options, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>
        {label} <span className={required}>{required}</span>
      </label>
      <select
        {...field}
        {...props}
        className={`${meta.touched && meta.error ? 'input-error' : ''}`}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.length > 0 &&
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
      {meta.touched && meta.error ? (
        <div className="errors">{meta.error}</div>
      ) : null}
    </>
  );
};

const BookingForm = () => {
  const [date, setDate] = useState('');
  const { state: availableTimesState, dispatch } = Api();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    await new Promise((r) => setTimeout(r, 2000));

    localStorage.setItem('formData', JSON.stringify(values));
    localStorage.setItem('date', values.date);
    localStorage.setItem('time', values.time);
    localStorage.setItem('guests', values.guests);
    localStorage.setItem('occasion', values.occasion);

    actions.resetForm();

    setTimeout(() => {
      navigate('/booking-confirmation');
    }, 0);
  };

  const handleDateChange = (value, setFieldValue) => {
    setFieldValue('date', value);
    setDate(value);
    dispatch(new Date(value));

    // Reset the time field to an empty string when a new date is selected
    setFieldValue('time', '');
  };

  const phoneRegExp = /^[+]?[0-9\s.-]{8,20}$/;

  const validationSchema = Yup.object().shape({
    guests: Yup.number()
      .integer('Guests must be an integer')
      .positive('Guests must be a positive number')
      .min(1, 'Must be at least 1')
      .max(10, 'Cannot exceed 10')
      .required('Required'),
    time: Yup.string().required('Required'),
    date: Yup.date()
      .min(new Date().toISOString().split('T')[0], 'Cannot be in the past')
      .required('Required'),
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    occasion: Yup.string(),
    description: Yup.string(),
  });

  return (
    <section className="booking-form-container">
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '',
          occasion: '',
          description: '',
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form aria-labelledby="booking-form-title">
            <Field
              as={CustomInput}
              label="Name"
              name="name"
              type="text"
              placeholder="Name"
              required="*"
            />
            <Field
              as={CustomInput}
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
              required="*"
            />
            <Field
              as={CustomInput}
              label="Phone"
              name="phone"
              type="text"
              placeholder="Phone number"
            />
            <Field
              as={CustomInput}
              label="Date"
              name="date"
              type="date"
              placeholder="Enter date"
              autoComplete="off"
              onChange={(e) => handleDateChange(e.target.value, setFieldValue)}
              required="*"
            />
            {!!date && (
              <Field
                as={CustomSelect}
                label="Time"
                name="time"
                placeholder="Please Select a time"
                options={availableTimesState.availableTimes}
                disabled={
                  !values.date ||
                  new Date(values.date) < new Date().setHours(0, 0, 0, 0)
                }
                required="*"
              />
            )}
            <Field
              as={CustomInput}
              label="Guests"
              name="guests"
              type="number"
              placeholder="Number of Guests"
              min={1}
              max={10}
              required="*"
            />
            <Field
              as={CustomSelect}
              label="Occasion"
              name="occasion"
              placeholder="Please select occasion"
              options={['Birthday', 'Anniversary', 'Date', 'Business']}
            />
            <Field
              as={CustomText}
              label="Additional information"
              name="description"
              placeholder="Add a special request"
            />
            <button className="btn-sub" disabled={isSubmitting} type="submit">
              {isSubmitting ? 'Submitting...' : 'Reserve a table'}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default BookingForm;
