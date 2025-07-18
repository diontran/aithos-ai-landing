// This is a mock API endpoint for demonstration purposes
// In production, you would create a proper backend API with your Stripe secret key

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { line_items, mode, success_url, cancel_url } = req.body;

    // Calculate total amount
    const totalAmount = line_items.reduce((sum, item) => {
      return sum + (item.price_data.unit_amount * item.quantity);
    }, 0);

    // Create a mock checkout session
    const sessionId = 'cs_test_' + Math.random().toString(36).substr(2, 9);
    
    // For demo purposes, redirect to a success page
    // In production, this would create a real Stripe checkout session
    const checkoutUrl = `${success_url}?session_id=${sessionId}&amount=${totalAmount}`;

    res.status(200).json({ 
      url: checkoutUrl,
      sessionId: sessionId 
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
} 