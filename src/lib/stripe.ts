const STRIPE_PUBLISHABLE_KEY = 'pk_test_51Rm14H2frWlQdvLKhQw71LAmBNPlKRISbIdCRdaMu2yMyaaUdzhADAUBjFpjcYQbPadMjRcB1YJ4blnM4sLEaeKW00WK2LIUhB';

export const createCheckoutSession = async (cartItems: Array<{
  id: string;
  name: string;
  price: number;
  quantity: number;
}>) => {
  try {
    // For demo purposes, we'll create a simple checkout flow
    // In production, you'd want to create a proper backend API with your Stripe secret key
    
    const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Create a simple checkout form or redirect
    const checkoutData = {
      items: cartItems,
      total: totalAmount,
      currency: 'usd',
      success_url: `${window.location.origin}/success`,
      cancel_url: `${window.location.origin}/cancel`,
    };

    // For now, we'll show an alert with the checkout details
    // In production, this would redirect to Stripe Checkout
    const confirmCheckout = window.confirm(
      `Proceed to checkout?\n\nTotal: $${totalAmount}/month\n\nItems:\n${cartItems.map(item => 
        `- ${item.name} (${item.quantity}x): $${item.price * item.quantity}/month`
      ).join('\n')}\n\nThis will redirect to Stripe for secure payment.`
    );

    if (confirmCheckout) {
      // In production, this would be a real Stripe checkout URL
      // For now, we'll redirect to a success page
      const successUrl = `${window.location.origin}/success?amount=${totalAmount}&items=${cartItems.length}`;
      window.location.href = successUrl;
    }
  } catch (error) {
    console.error('Error creating checkout session:', error);
    // Fallback to consultation booking
    window.open('https://zcal.co/diontran/30min', '_blank');
  }
}; 