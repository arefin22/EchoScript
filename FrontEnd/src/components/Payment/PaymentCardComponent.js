const PaymentCardComponent = () => {
  return (
    <div>
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
      </div>s
    </div>
  );
};

export default PaymentCardComponent;
