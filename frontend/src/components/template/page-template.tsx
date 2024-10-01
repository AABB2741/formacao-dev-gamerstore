import type { ComponentProps } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export interface PageTemplateProps extends ComponentProps<"div"> {
  hasHeader?: boolean;
  hasFooter?: boolean;
}

export function PageTemplate({
  className,
  hasHeader = true,
  hasFooter = true,
	...rest
}: PageTemplateProps) {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #2d0064 0%, #0d001c 100%)",
      }}
    >
      <div
        className="flex-1 flex flex-col w-screen"
        style={{ background: 'url("/background.png")' }}
      >
        {hasHeader && <Header />}
        <main className={`flex-1 flex flex-col ${className ?? ""}`} {...rest} />
        {hasFooter && <Footer />}
      </div>
    </div>
  );
}
