import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HandHeart } from 'lucide-react';

const Donation = () => {
  const paypalLink = 'https://www.paypal.com/CA/fundraiser/charity/3472547';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-800 mb-2">Support Our Vision</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Help us make a difference in the lives of those struggling with partial sight and blindness
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <HandHeart className="h-24 w-24 text-recipe-orange" />
                </div>
                
                <div className="space-y-4 text-gray-600">
                  <p>
                    If you've found value in our recipe-sharing community, we invite you to join us in supporting 
                    an important cause. All donations will be directed to the Kensington Eye Institute in Toronto, 
                    Ontario, where dedicated professionals are conducting vital research to help those affected by 
                    partial sight and blindness.
                  </p>
                  <p>
                    Your contribution, no matter the size, will help fund research and treatments that could 
                    change lives. Together, we can help create a brighter future for those affected by vision 
                    impairment.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">How to Donate</h3>
                    <p className="mb-4">
                      You can make your donation directly through our PayPal fundraiser: <br />
                      <span className="font-medium text-recipe-orange break-all">{paypalLink}</span>
                    </p>
                    <Button 
                      className="w-full bg-recipe-orange hover:bg-amber-600"
                      onClick={() => window.open(paypalLink, '_blank', 'noopener,noreferrer')}
                    >
                      Donate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Donation;
