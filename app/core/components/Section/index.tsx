import type { ReactNode } from "react";

interface SectionProps {
  children?: ReactNode;
}

export const Section = ({ children }: SectionProps) => (
  <section className="h-full w-full bg-slate-700/60 text-slate-400 p-2 rounded-lg">
    {children}
  </section>
);
