import React from 'react';
import FYLP_Logo from '../../../../public/assets/images/FYLP_Logo.png';
import Image from 'next/image';
const SectionOne = () => {
  return (
    <div>
      <Image className="w-[15.625rem] py-4" src={FYLP_Logo} alt="" />
      <article className="grid gap-4 text-pretty font-poppins pb-[3.5rem]">
        <h1 className="font-semibold text-xl">
          About The Filipino Youth Leadership Program 2024
        </h1>
        <p>
          The Filipino Youth Leadership Program (FYLP) 2024 brings forth a new
          and immersive leadership training program integrating and placing
          emphasis on the value of reverting to the grassroots. It views
          leadership through the lens of embarking on collective action from the
          local community to implement change on a wider expanse.
        </p>
        <p>
          The leadership development program intends to onboard the nation's key
          storytellers, highly-regarded fellows, and mentors of various
          backgrounds. It seeks to create a home for young Mindanaoan leaders
          who continuously act on their passions and interests, bringing life to
          a reimagined Philippines.
        </p>
        <p>
          FYLP features masterclasses, team-building exercises, and community
          immersion experiences. Through FYLP 2024, we aspire to empower young
          leaders with the tools, program modules, and inspiration they need to
          become catalysts for positive change, dedicated to the service of the
          Filipino people and the nation's continuous growth and development.
        </p>
        <p>
          FYLP 2024 is scheduled to launch on September 19 - September 22, 2024,
          at Ateneo de Davao University. This week-long program will be a
          cornerstone event, setting the stage for future leaders to emerge,
          equipped with the skills, knowledge, and passion to drive meaningful
          change in their communities and beyond.
        </p>
      </article>

      <article className="grid gap-4 text-pretty font-poppins pb-[8rem]">
        <h1 className="font-semibold text-xl">
          Previous Filipino Youth Leadership Program
        </h1>
        <p>
          The Filipino Youth Leadership Program (FYLP), a month-long leadership
          development experience, had been designed to offer a unique
          opportunity to be trained, formed, and inspired by the nation's key
          storytellers, esteemed lecturers, and young-driven mentors, anchored
          in a great love for the country.
        </p>
        <p>
          In its pursuit of a deep-rooted and transformative leadership
          encounter, FYLP had selected twenty sterling student leaders from
          across Mindanao. In 2021, the program was conducted on an online
          platform, and in this iteration, twenty delegates had been
          successfully onboarded, ensuring they had been equipped with the
          necessary skills and insights to drive impactful change in their
          communities.
        </p>
        <p>
          Among the distinguished speakers were Mr. Aldwin Chester Y. Dumago,
          Regional Skills Development Director of JCI Davao Region; Hon. Jose
          Luis Martin Gascon, the former Chairperson of the Commission on Human
          Rights; and Secretary Karlo Nograles, the former Cabinet Secretary of
          the Office of the President of the Republic of the Philippines.
        </p>
      </article>
    </div>
  );
};

export default SectionOne;
