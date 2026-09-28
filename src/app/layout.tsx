import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B1SCU1TK1D — Cool Biscuits from the Internet",
  description:
    "A cinematic archive of cool internet finds — tools, sites, and rabbit holes worth your time.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-cream">
        <div className="landscape" aria-hidden />
        <div className="relative z-10 min-h-full">{children}</div>
        <div className="grain" aria-hidden />
        <div className="scanlines" aria-hidden />
        <div className="vignette" aria-hidden />
      </body>
    </html>
  );
}
