import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export default function Section({
  children,
  className = "",
  id,
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-24 ${dark ? "bg-gray-900 text-white" : "bg-white text-gray-900"} ${className}`}
    >
      {children}
    </section>
  );
}
