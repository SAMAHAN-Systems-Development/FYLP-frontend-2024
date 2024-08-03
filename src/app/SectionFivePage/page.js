import React from "react";
import SectionFiveCard from "@/components/ui/SectionFiveCard";
import { FYLP_Program } from "@/data/SectionFive";
import MainButton from "@/components/ui/MainButton";
import Image from "next/image";

// for testing purposes
export default function SectionFivePage() {
  return (
    <div className="container-2xl">
      <div className="relative">
        {/* <div className="absolute inset-0 overflow-hidden">
          <Image
            src={Pattern}
            alt="Pattern"
            placeholder="blur"
            className="absolute -left-20 -top-20 object-cover"
            style={{ width: '50%', height: '50%' }}
          />
        </div> */}
        <div className="relative z-10">
          <div className="flex justify-center">
            <div className="text-[1.5625rem] font-semibold uppercase text-center">
              What's in it for <span className="text-[#FD1E0A]">you</span>
            </div>
          </div>
          <div className="flex justify-center items-center py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {FYLP_Program.map((item, index) => (
                <div
                  key={index}
             
                >
                  <SectionFiveCard {...item} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="font-normal text-xl text-center pt-10">
              Be a part of this immersive leadership program with FYLP 2024.
            </div>
          </div>
          <div className="flex justify-center py-5">
            <MainButton href="/register">
              Register Now
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
}
