import React, { useEffect, useState } from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Success: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [items, setItems] = useState<string>('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setAmount(urlParams.get('amount') || '0');
    setItems(urlParams.get('items') || '0');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-background rounded-2xl shadow-2xl p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
          <p className="text-muted-foreground">
            Thank you for hiring AI employees. We'll be in touch soon to set up your AI team.
          </p>
        </div>

        <div className="bg-accent/10 rounded-lg p-4 mb-6">
          <h2 className="font-semibold mb-2">Order Summary</h2>
          <p className="text-2xl font-bold text-accent">${amount}/month</p>
          <p className="text-sm text-muted-foreground">{items} AI Employee{items !== '1' ? 's' : ''}</p>
        </div>

        <div className="space-y-3">
          <Button 
            onClick={() => window.location.href = '/'}
            className="w-full bg-[#FEF7CD] hover:bg-[#FEF7CD]/90 text-black"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Home
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.open('https://zcal.co/diontran/30min', '_blank')}
            className="w-full"
          >
            Schedule Setup Call
          </Button>
        </div>

        <div className="mt-6 text-xs text-muted-foreground">
          <p>You'll receive a confirmation email shortly.</p>
          <p>Our team will contact you within 24 hours to begin setup.</p>
        </div>
      </div>
    </div>
  );
};

export default Success; 