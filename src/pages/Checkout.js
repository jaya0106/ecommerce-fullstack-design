// src/pages/Checkout.js
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY'); // Replace with your Stripe public key

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState(null);
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  useEffect(() => {
    axios.post('http://localhost:5000/payment/create-payment-intent', { items: cartItems })
      .then(res => setClientSecret(res.data.clientSecret))
      .catch(err => console.error(err));
  }, [cartItems]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Jenny Rosen', // Replace with user's name
        },
      },
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        alert('Payment succeeded!');
        localStorage.removeItem('cartItems');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
      <button type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default Checkout;