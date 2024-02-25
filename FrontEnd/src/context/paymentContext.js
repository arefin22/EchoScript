'use client'
import React, { createContext, useContext, useState } from 'react';


const PaymentContext = createContext()
const PaymentProvider = ({ children }) => {

    const [payment, setPayment] = useState('')
    // const [ loader, setLoader] =useState(true);

    const info = {
        payment,
        setPayment
    }


    return (
        <PaymentContext.Provider value={info}>
            {children}
        </PaymentContext.Provider>
    );
};

export default PaymentProvider;

export const usePayment = () => {
    return useContext(PaymentContext);
  };