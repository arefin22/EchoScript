import React from "react";

const Payment = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-10">
      {/* card 1 */}
      <div className="border-2 p-10 w-80 border-black rounded-3xl h-[600px] text-center flex flex-col items-center justify-between">
        <div className="flex flex-col gap-4">
          <h2>Monthly Package</h2>
          <hr />
          <p className="text-xl">
            $ <span>4.89</span> <span className="text-xs">/month</span>
          </p>
          <hr />
        </div>
        <div className="flex flex-col gap-4">
          <p>Ads free experiences</p>
          <p>Read subscribers-only contents</p>
          <p>Get paid for your writing</p>
          <p>Priority Support</p>
          <p>Access to early new feature</p>
        </div>
        <div>
          <button className="p-5 rounded-xl drop-shadow-lg hover:drop-shadow-2xl bg-white px-16">
            Try 1 Month
          </button>
        </div>
      </div>
      {/* card 2 */}
      <div className="border-2 p-10 w-80 border-black rounded-3xl h-[700px] text-center flex flex-col items-center justify-between">
        <div className="flex flex-col text-green-600 gap-4">
          <h2>Best Package</h2>
          <hr />
          <div className="text-left">
            <p className="text-xl text-green-600">$22.00</p>
            <p className="text-xl text-black">
              $<del>29.00</del>
              <span className="text-xs">/6 month</span>
            </p>
          </div>
          <hr />
        </div>
        <div className="flex flex-col gap-4">
          <p>Cost Saving</p>
          <p>Ads free experiences</p>
          <p>Read subscribers-only contents</p>
          <p>Get paid for your writing</p>
          <p>Priority Support</p>
          <p>Access to early new feature</p>
        </div>
        <div>
          <button className="p-5 rounded-xl drop-shadow-lg hover:drop-shadow-2xl bg-green-600 text-white px-16">
            Choose Now
          </button>
        </div>
      </div>
      {/* card 3 */}
      <div className="border-2 p-10 w-80 border-black rounded-3xl h-[600px] text-center flex flex-col items-center justify-between">
        <div className="flex flex-col gap-4">
          <h2>Annual Package</h2>
          <hr />
          <p className="text-xl">
            $ <span>58.00</span> <span className="text-xs">/Year</span>
          </p>
          <hr />
        </div>
        <div className="flex flex-col gap-4">
          <p>Ads free experiences</p>
          <p>Read subscribers-only contents</p>
          <p>Get paid for your writing</p>
          <p>Priority Support</p>
          <p>Access to early new feature</p>
        </div>
        <div>
          <button className="p-5 rounded-xl drop-shadow-lg hover:drop-shadow-2xl bg-white px-16">
            Choose
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
