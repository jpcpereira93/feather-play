import type { ReactNode } from "react";

interface BoxProps {
  children?: ReactNode;
}

export const Box = ({ children }: BoxProps) => (
  <section className="h-full w-full bg-dark-700 rounded-lg overflow-hidden">
    {children}
  </section>
);
