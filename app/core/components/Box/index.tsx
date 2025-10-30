import type { ReactNode } from "react";

interface BoxProps {
  children?: ReactNode;
}

export const Box = ({ children }: BoxProps) => (
  <section className="h-full w-full bg-dark-700 p-2 rounded-lg overflow-hidden">
    {children}
  </section>
);
