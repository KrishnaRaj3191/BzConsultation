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
      <section className="py-5 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-1">
          <h4 className="text-muted-foreground text-lg font-semibold">
            CONSULT WITH BZ
          </h4>

          <h2 className="text-2xl md:text-4xl font-bold dark:text-white">
            Find a time to chat with Bz team
          </h2>

          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            We’re ready to become your personal guide through the software
            experience as we bring your app or website to life. Use the form
            below to pick a time that works best for you.
          </p>
        </div>
      </section>
      {/* forms */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {/* col-1 */}
          <div>
            <div className="mt-8">
              <label className="font-medium">First Name</label>
              <Input
                type="text"
                placeholder="First Name"
                className="bg-gray-200  font-medium px-5 py-5 w-full mt-4"
              />
            </div>

            <div className="mt-8">
              <label className="font-medium">Last Name</label>
              <Input
                type="text"
                placeholder="Last Name"
                className="bg-gray-200 px-5 py-5   font-medium w-full mt-4"
              />
            </div>

            <div className="mt-8">
              <label className="font-medium">Email Address</label>
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-gray-200   font-medium px-5 py-5 w-full mt-4"
              />
            </div>

            <div className="mt-8">
              <label className="font-medium">Phone Number</label>
              <Input
                type="number"
                placeholder="Phone Number"
                className="bg-gray-200   font-medium px-5 py-5 w-full mt-4"
              />
            </div>
          </div>

          {/* col-2 */}
          <div>
            <div className="mt-8">
              <label className="font-medium">Select Date</label>
              <Input
                type="date"
                className="bg-gray-200 px-5 py-5   font-medium w-full mt-4"
              />
            </div>

            <div className="mt-8">
              <label className="font-medium">Select Time Zone</label>
              <Select>
                <SelectTrigger className="w-full mt-4 bg-gray-200 px-5 py-6">
                  <SelectValue
                    placeholder="Select time"
                    className="  font-medium"
                  />
                </SelectTrigger>

                <SelectContent side="bottom">
                  <SelectItem value="-12:00">
                    (GMT -12:00) Eniwetok, Kwajalein
                  </SelectItem>
                  <SelectItem value="-11:00">
                    (GMT -11:00) Midway Island, Samoa
                  </SelectItem>
                  <SelectItem value="-10:00">(GMT -10:00) Hawaii</SelectItem>
                  <SelectItem value="-09:50">(GMT -9:30) Taiohae</SelectItem>
                  <SelectItem value="-09:00">(GMT -9:00) Alaska</SelectItem>
                  <SelectItem value="-08:00">
                    (GMT -8:00) Pacific Time (US &amp; Canada)
                  </SelectItem>
                  <SelectItem value="-07:00">
                    (GMT -7:00) Mountain Time (US &amp; Canada)
                  </SelectItem>
                  <SelectItem value="-06:00">
                    (GMT -6:00) Central Time (US &amp; Canada), Mexico City
                  </SelectItem>
                  <SelectItem value="-05:00">
                    (GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima
                  </SelectItem>
                  <SelectItem value="-04:50">(GMT -4:30) Caracas</SelectItem>
                  <SelectItem value="-04:00">
                    (GMT -4:00) Atlantic Time (Canada), Caracas, La Paz
                  </SelectItem>
                  <SelectItem value="-03:50">
                    (GMT -3:30) Newfoundland
                  </SelectItem>
                  <SelectItem value="-03:00">
                    (GMT -3:00) Brazil, Buenos Aires, Georgetown
                  </SelectItem>
                  <SelectItem value="-02:00">
                    (GMT -2:00) Mid-Atlantic
                  </SelectItem>
                  <SelectItem value="-01:00">
                    (GMT -1:00) Azores, Cape Verde Islands
                  </SelectItem>
                  <SelectItem value="+00:00">
                    (GMT) Western Europe Time, London, Lisbon, Casablanca
                  </SelectItem>
                  <SelectItem value="+01:00">
                    (GMT +1:00) Brussels, Copenhagen, Madrid, Paris
                  </SelectItem>
                  <SelectItem value="+02:00">
                    (GMT +2:00) Kaliningrad, South Africa
                  </SelectItem>
                  <SelectItem value="+03:00">
                    (GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg
                  </SelectItem>
                  <SelectItem value="+03:50">(GMT +3:30) Tehran</SelectItem>
                  <SelectItem value="+04:00">
                    (GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi
                  </SelectItem>
                  <SelectItem value="+04:50">(GMT +4:30) Kabul</SelectItem>
                  <SelectItem value="+05:00">
                    (GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent
                  </SelectItem>
                  <SelectItem value="+05:50">
                    (GMT +5:30) Bombay, Calcutta, Madras, New Delhi
                  </SelectItem>
                  <SelectItem value="+05:75">
                    (GMT +5:45) Kathmandu, Pokhara
                  </SelectItem>
                  <SelectItem value="+06:00">
                    (GMT +6:00) Almaty, Dhaka, Colombo
                  </SelectItem>
                  <SelectItem value="+06:50">
                    (GMT +6:30) Yangon, Mandalay
                  </SelectItem>
                  <SelectItem value="+07:00">
                    (GMT +7:00) Bangkok, Hanoi, Jakarta
                  </SelectItem>
                  <SelectItem value="+08:00">
                    (GMT +8:00) Beijing, Perth, Singapore, Hong Kong
                  </SelectItem>
                  <SelectItem value="+08:75">(GMT +8:45) Eucla</SelectItem>
                  <SelectItem value="+09:00">
                    (GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk
                  </SelectItem>
                  <SelectItem value="+09:50">
                    (GMT +9:30) Adelaide, Darwin
                  </SelectItem>
                  <SelectItem value="+10:00">
                    (GMT +10:00) Eastern Australia, Guam, Vladivostok
                  </SelectItem>
                  <SelectItem value="+10:50">
                    (GMT +10:30) Lord Howe Island
                  </SelectItem>
                  <SelectItem value="+11:00">
                    (GMT +11:00) Magadan, Solomon Islands, New Caledonia
                  </SelectItem>
                  <SelectItem value="+11:50">
                    (GMT +11:30) Norfolk Island
                  </SelectItem>
                  <SelectItem value="+12:00">
                    (GMT +12:00) Auckland, Wellington, Fiji, Kamchatka
                  </SelectItem>
                  <SelectItem value="+12:75">
                    (GMT +12:45) Chatham Islands
                  </SelectItem>
                  <SelectItem value="+13:00">
                    (GMT +13:00) Apia, Nukualofa
                  </SelectItem>
                  <SelectItem value="+14:00">
                    (GMT +14:00) Line Islands, Tokelau
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-8">
              <label className="font-medium">Select Time</label>

              <div className="space-y-3 max-h-[300px] overflow-y-auto mt-6">
                {[
                  "Select Time",
                  "9:30 am",
                  "10:00 am",
                  "10:30 am",
                  "11:00 am",
                  "11:30 am",
                  "2:00 pm",
                  "2:30 pm",
                  "3:00 pm",
                  "3:30 pm",
                  "4:00 pm",
                  "4:30 pm",
                  "5:00 pm",
                  "5:30 pm",
                ].map((time) => (
                  <div
                    key={time}
                    className="p-3 border-black dark:border-white border w-full text-center active:bg-gray-200"
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 mt-">
            <div className="max-w-md dark:bg-[#222] rounded dark:text-white  border border-[#d3d3d3] bg-[#f9f9f9] text-black flex justify-between items-center p-1.5 shadow">
              {/* checkbox */}
              <div className="flex items-center gap-3">
                <Checkbox />
                <p className="font-medium text-sm sm:text-base">
                  I'm not a robot
                </p>
              </div>

              {/* captcha logo */}
              <div className="text-[#555] dark:text-white text-[10px] flex flex-col items-center">
                <Image
                  src={"/logo_48.png"}
                  height={40}
                  width={40}
                  alt="captcha"
                />
                <p>reCAPTCHA</p>
                <p>
                  Privacy <span>-</span> Terms
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 mt-16 px-4">
          <Button
            className="font-bold text-sm sm:text-base md:text-lg 
                     px-8 sm:px-12 py-4 
                     hover:bg-white hover:text-primary 
                     transition-all duration-500 
                     hover:border-2 hover:border-black"
          >
            Click to Schedule
          </Button>

          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
            Our Team will contact you!
          </h1>
        </div>
      </section>
    </>
  );
};

export default page;
