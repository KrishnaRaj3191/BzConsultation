import ConsultationForm from "@/components/ConsultationForm";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "animate.css"

const page = () => {
  return (
    <>
      <section className="relative consultant md:h-[500px] flex items-center">
        <div className="absolute bg-img inset-0 bg-gray-200 dark:bg-gray-900" />
        <div className="absolute overlay hidden dark:block" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-black dark:text-white text-sm md:text-lg font-medium hover:text-primary transition">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-black dark:text-white text-sm md:text-lg font-medium">
                  Schedule a consultation
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-extrabold text-black dark:text-white">
            Schedule a consultation
          </h1>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-1 px-4 ">
        <div className="max-w-4xl mx-auto text-center space-y-1 animate__animated animate__fadeInUp">
          <h4 className="text-muted-foreground text-lg font-semibold">
            CONSULT WITH BZ
          </h4>

          <h2 className="text-2xl md:text-4xl font-bold dark:text-white">
            Find a time to chat with Bz team
          </h2>

          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-2">
            We’re ready to become your personal guide through the software
            experience as we bring your app or website to life. Use the form
            below to pick a time that works best for you.
          </p>
        </div>
      </section>


      {/* forms */}
      <ConsultationForm />
    </>
  );
};

export default page;
