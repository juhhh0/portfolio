import React from "react";

export default function IconLabel({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) {
  return (
    <li className="flex gap-2 items-center">
      <img className="w-6 md:w-8" src={icon} alt="" />
      <span className="font-medium">{label}</span>
    </li>
  );
}
