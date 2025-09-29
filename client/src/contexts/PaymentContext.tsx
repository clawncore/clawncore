import React, { createContext, useContext, useState, useEffect } from 'react';

interface PaymentContextType {
  // Simplified context without subscription features
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export function PaymentProvider({ children }: { children: React.ReactNode }) {
  return (
    <PaymentContext.Provider
      value={{}}
    >
      {children}
    </PaymentContext.Provider>
  );
}

export function usePayment() {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
}
