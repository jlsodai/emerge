import "./globals.css";
import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Noto_Serif_Display } from "next/font/google";
import localFont from "next/font/local";
import NavigationSection from "@/app/sections/NavigationSection";

const noto = Noto_Serif_Display({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-serif-display",
});

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Light.ttf",
      weight: "200",
      style: "light",
    },
    {
      path: "../../public/fonts/Inter-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-inter",
});

const libreb = localFont({
  src: [
    {
      path: "../../public/fonts/LibreBaskerville-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/LibreBaskerville-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-libre-baskerville",
});

const halyard = localFont({
  src: [
    {
      path: "../../public/fonts/Halyard-Display-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Halyard-Display-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/fonts/Halyard-Display-ExtraLight.ttf",
      weight: "200",
      style: "extralight",
    },
  ],
  variable: "--font-halyard-display",
});

export const metadata = {
  title:
    "EMERGE | Empowering Minds to Embrace Resilience, Growth, and Excellence",
  description: "Empowering Minds to Embrace Resilience, Growth, and Excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${libreb.variable} ${noto.variable} ${halyard.variable} text-dusk text-[16px]`}
      >
        <NavigationSection />
        {children}
      </body>
    </html>
  );
}
