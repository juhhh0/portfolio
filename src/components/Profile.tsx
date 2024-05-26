import React from "react";
import IconLabel from "./ui/IconLabel";

export default function Profile() {
  return (
    <section className="flex flex-col gap-3 items-center">
      <div className="w-36 h-36 md:w-64 md:h-64 rounded-full bg-center bg-cover profile-picture"></div>
      <h1 className="font-bold text-3xl md:text-6xl">Joris Mansion</h1>
      <h2 className="font-semibold text-xl md:text-3xl">
        Développeur web basé à Paris
      </h2>
      <ul className="flex flex-wrap gap-3 justify-center items-center">
        <IconLabel icon="/icons/linkedin.svg" label="LinkedIn" />
        <IconLabel icon="/icons/github.svg" label="GitHub" />
        <IconLabel icon="/icons/email.svg" label="joris.mansion@gmail.com" />
      </ul>
    </section>
  );
}
