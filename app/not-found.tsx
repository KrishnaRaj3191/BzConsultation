import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4 mt-0 lg:mt-40">
      <div className="flex md:flex-row items-center justify-center">
        {/* 404 Text */}
        <div>
          <h1 className=" text-center text-[100px] md:text-[250px] font-extrabold">
            404
          </h1>
        </div>

        {/* Image */}
        <div className=" lg:mt-[-130px] md:mt-[-130px]  mt-[-55px] w-full flex justify-end sm:justify-end md:-ms-13 lg:-ms-15 -ms-5 bounce">
          <Image
            className="w-[100px] sm:w-[220px] md:w-[260px] lg:w-full h-auto"
            src="/404.png"
            alt="404 illustration"
          />
        </div>
      </div>

      {/* Text */}
      <p className="mt-3 text-lg sm:text-xl md:text-2xl font-medium">
        The page you are looking for is not exist.
      </p>

      {/* Button */}
      <div className="mt-3">
        <Button className="text-white font-bold px-8 sm:px-10 md:px-15 py-3 sm:py-4 md:py-5 text-lg">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
