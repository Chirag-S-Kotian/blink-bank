import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
      <CountUp
        className="w-full"
        decimals={4}
        decimal=","
        prefix="$"
        end={amount}
      />
    </div>
  );
};

export default AnimatedCounter;
