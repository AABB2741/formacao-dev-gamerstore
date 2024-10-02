import { PageTemplate } from "@/components/template/page-template";
import type { ReactNode } from "react";

interface AppLayoutProps {
  children?: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return <PageTemplate>{children}</PageTemplate>;
}
