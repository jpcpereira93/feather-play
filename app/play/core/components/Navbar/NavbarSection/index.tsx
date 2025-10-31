import type { ReactNode } from "react";

interface NavbarSectionProps {
  children: ReactNode;
}

export const NavbarSection = ({ children }: NavbarSectionProps) => (
  <div className="flex items-center gap-4">{children}</div>
);
