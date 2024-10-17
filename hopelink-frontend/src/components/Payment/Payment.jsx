import React from 'react';
import axios from 'axios';

const Payment = () => {

  const handlePayment = async () =>{
    const data = {
      name: "John Doe",
      mobileNumber:9421307688,
      amount:1,
    }
    try {
      const response = await axios.post('http://localhost:3000/create-order', data)
      console.log(response.data)
      window.location.href = response.data.url
    } catch (error) {
      console.log("error in payment", error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <button
      onClick={handlePayment}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Pay Now
      </button>
    </div>
  );
};
export default Payment