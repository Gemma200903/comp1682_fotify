import React from "react";
import { Outlet } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Authen = () => {
  return (
    <div className="Authen--Content">
      <div className="authen--item">
        <DotLottieReact
          src="https://lottie.host/2ff45e5e-f5c6-4ccd-887e-f616c9e1db62/snVJIGsKJU.lottie"
          loop
          autoplay
        />
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Authen;
