import { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Providers } from "@/redux/Providers";
import Cart from "@/components/Cart/Cart";
import Toast from "@/components/Toast/Toast";
import { NextAuthProvider } from "@/components/AuthProvider/AuthProvider";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Candles By Sarah B.",
  description: '"The Redolence of Country Life."',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body>
        <Toast />
        <Providers>
          <NextAuthProvider>
            <Cart />
            <Header />
            <main className="bg-primary-gradient min-h-screen">{children}</main>
            <Footer />
          </NextAuthProvider>
        </Providers>
        <Script id="omnisend-script">
          {`window.omnisend = window.omnisend || [];
        omnisend.push(["accountID", "655f796c692f14abf0a78586"]);
        omnisend.push(["track", "$pageViewed"]);
        !function(){var e=document.createElement("script");
        e.type="text/javascript",e.async=!0,
        e.src="https://omnisnippet1.com/inshop/launcher-v2.js";
        var t=document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e,t)}()`}
        </Script>
      </body>
    </html>
  );
}
