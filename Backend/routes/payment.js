// backend/routes/payment.js
const router = require('express').Router();
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY'); // Replace with your Stripe secret key

router.post('/create-payment-intent', async (req, res) => {
  const { items } = req.body;

  // Calculate the total amount
  const calculateOrderAmount = (items) => {
    return items.reduce((total, item) => total + item.price, 0) * 100; // Stripe uses cents
  };

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;