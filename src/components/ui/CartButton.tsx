import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, X, CreditCard, MessageCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { createCheckoutSession } from '@/lib/stripe';

const CartButton: React.FC = () => {
  const { 
    cartItems, 
    totalItems, 
    totalPrice, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity 
  } = useCart();

  const handleStripeCheckout = async () => {
    await createCheckoutSession(cartItems);
  };

  const handleConsultation = () => {
    window.open('https://zcal.co/diontran/30min', '_blank');
  };

  return (
    <>
      {/* Fixed Cart Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={() => setIsCartOpen(true)}
          className="bg-[#FEF7CD] hover:bg-[#FEF7CD]/90 text-black font-medium px-4 py-2 rounded-full shadow-lg button-bounce"
          size="lg"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          <span>Hire AI Employees</span>
          {totalItems > 0 && (
            <span className="ml-2 bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              {totalItems}
            </span>
          )}
        </Button>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">AI Employee Cart</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsCartOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Your cart is empty</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Browse our AI employees and add them to your cart
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          ${item.price.toLocaleString()}/month
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 p-0"
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 p-0"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t border-border">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Total:</span>
                  <span className="text-xl font-bold">
                    ${totalPrice.toLocaleString()}/month
                  </span>
                </div>
                <Button
                  onClick={handleStripeCheckout}
                  className="w-full bg-[#FEF7CD] hover:bg-[#FEF7CD]/90 text-black font-medium py-3"
                  size="lg"
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Pay with Stripe
                </Button>
                
                <div className="mt-3 text-center">
                  <p className="text-xs text-muted-foreground mb-2">or</p>
                  <Button
                    onClick={handleConsultation}
                    variant="outline"
                    className="w-full text-sm"
                    size="sm"
                  >
                    <MessageCircle className="w-3 h-3 mr-2" />
                    Schedule Free Consultation
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Discuss your needs with our AI experts
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CartButton; 