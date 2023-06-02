"use client";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Maven_Pro } from "next/font/google";
import ThemeProvider from "./theme-provider";
import { AuthProvider } from "./authContext";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const maven_Pro = Maven_Pro({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

//i want to not display the header on the login page

export default function RootLayout({ children }) {
  const [hideHeader, setHideHeader] = useState(false);

  const pathname = usePathname();

  //get the current path

  useEffect(() => {
    if (pathname === "/login") {
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }
  }, [pathname]);
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <AuthProvider>
          {!hideHeader && <Header />}
          <div className="container px-5 mx-auto">{children}</div>
          {!hideHeader && (
            <>
              <img
                src="
      assets/footer.gif"
                className="w-[300px] md:w-[580px] mx-auto"
                alt=""
              />
              <p className="mb-5 text-xl text-center">Copyright @ 2023</p>
            </>
          )}
        </AuthProvider>
      </body>
    </html>
  );
}
