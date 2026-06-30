import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    template: "%s - Ecommerce online store",
    default: "Ecommerce online store",
},
description: "Temukan produk terbaik dengan kualitas terjamin, harga kompetitif, dan pengalaman belanja yang mudah serta aman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
        <html
          lang="en"
          className={cn("font-poppins antialiased", "font-sans", geist.variable)}
          >
            <body>
                <div className="flex flex-col min-h-screen">
                <Header />
                <main>{children}</main>
                <Footer />
                </div>
            </body>
        </html>
    </ClerkProvider>
  );
}
