import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button className="px-10 py-2">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
